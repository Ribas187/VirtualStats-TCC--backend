import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { Adm } from '../entities/Adm';
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider';
import { IAdmRepository } from '../repositories/IAdmRepository';

interface IRequest {
  id: number;
  nome?: string;
  telefone?: string;
  email?: string;
  senha_antiga?: string;
  senha?: string;
  id_hospital?: number;
}

@injectable()
class UpdateAdmService {
  constructor(
    @inject('AdmRepository')
    private admRepository: IAdmRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute(data: IRequest): Promise<Adm> {
    const { id } = data;

    const adm = await this.admRepository.findById(id);

    if (!adm) {
      throw new AppError('ID does not exist');
    }

    const {
      email = adm.email,
      id_hospital = adm.id_hospital,
      nome = adm.nome,
      telefone = adm.telefone,
      senha,
      senha_antiga,
    } = data;

    const existEmail = await this.admRepository.findByEmail(email);

    if (existEmail && existEmail.id !== id) {
      throw new AppError('Email already in use');
    }

    if (senha && !senha_antiga) {
      throw new AppError('You must inform your old password');
    }

    if (senha && senha_antiga) {
      const checkOldPassword = await this.hashProvider.compareHash(
        senha_antiga,
        adm.senha,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match');
      }

      adm.senha = await this.hashProvider.generateHash(senha);
    }

    return this.admRepository.save({
      id,
      email,
      id_hospital,
      nome,
      telefone,
      senha: adm.senha,
    });
  }
}

export { UpdateAdmService };
