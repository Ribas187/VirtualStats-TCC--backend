import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { ICreateAdmDTO } from '../DTOs/ICreateAdmDTO';
import { Adm } from '../entities/Adm';
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider';
import { IAdmRepository } from '../repositories/IAdmRepository';

@injectable()
class CreateAdmService {
  constructor(
    @inject('AdmRepository')
    private admRepository: IAdmRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute(data: ICreateAdmDTO): Promise<Adm> {
    const { email, senha } = data;

    const exists = await this.admRepository.findByEmail(email);

    if (exists) {
      throw new AppError('Email already in use');
    }

    const hashedPassword = await this.hashProvider.generateHash(senha);

    const adm = await this.admRepository.create({
      ...data,
      senha: hashedPassword,
    });

    return adm;
  }
}

export { CreateAdmService };
