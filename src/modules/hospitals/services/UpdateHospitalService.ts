import { inject, injectable } from 'tsyringe';
import { Hospital } from '../entities/Hospital';
import { IHospitalRepository } from '../repositories/IHospitalRepository';

interface IRequest {
  id: number;
  cnpj: string;
  nome: string;
  telefone: string;
  cep: string;
  endereco: string;
  email: string;
}

@injectable()
class UpdateHospitalService {
  constructor(
    @inject('HospitalRepository')
    private hospitalRepository: IHospitalRepository,
  ) {}

  public async execute(data: IRequest): Promise<Hospital> {
    const { id } = data;

    const hospital = await this.hospitalRepository.findById(id);

    if (!hospital) {
      throw new Error('Hospital does not exist');
    }

    const {
      cep = hospital.cep,
      cnpj = hospital.cnpj,
      email = hospital.email,
      endereco = hospital.endereco,
      nome = hospital.nome,
      telefone = hospital.telefone,
    } = data;

    const hospitalWithEmail = await this.hospitalRepository.findByEmail(email);

    if (hospitalWithEmail && hospitalWithEmail.id !== id) {
      throw new Error('E-mail already in use');
    }

    const hospitalWithCNPJ = await this.hospitalRepository.findByCNPJ(cnpj);

    if (hospitalWithCNPJ && hospitalWithCNPJ.id !== id) {
      throw new Error('CNPJ already in use');
    }

    return this.hospitalRepository.save({
      id,
      cep,
      cnpj,
      email,
      endereco,
      nome,
      telefone,
    });
  }
}

export { UpdateHospitalService };
