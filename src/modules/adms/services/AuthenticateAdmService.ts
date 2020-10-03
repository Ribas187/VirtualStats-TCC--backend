import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import AppError from '../../../errors/AppError';
import { Adm } from '../entities/Adm';
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider';
import { IAdmRepository } from '../repositories/IAdmRepository';
import auth from '../../../config/auth';

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  adm: Adm;
  token: string;
}

@injectable()
class AuthenticateAdmService {
  constructor(
    @inject('AdmRepository')
    private admRepository: IAdmRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, senha }: IRequest): Promise<IResponse> {
    const adm = await this.admRepository.findByEmail(email);

    if (!adm) {
      throw new AppError('Email does not exist', 401);
    }

    const passwordMatch = await this.hashProvider.compareHash(senha, adm.senha);

    if (!passwordMatch) {
      throw new AppError('Wrong password', 401);
    }

    const { secret, expiresIn } = auth.jwt;

    const token = sign({}, secret, {
      subject: String(adm.id),
      expiresIn,
    });

    return {
      adm,
      token,
    };
  }
}

export { AuthenticateAdmService };
