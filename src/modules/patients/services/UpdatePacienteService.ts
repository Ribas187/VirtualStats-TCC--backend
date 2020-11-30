import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { IHospitalRepository } from '../../hospitals/repositories/IHospitalRepository';
import { Paciente } from '../entities/Paciente';
import { IPacientesRepository } from '../repositories/IPacientesRepository';

interface IRequest {
  id: number;
  sexo: 'M' | 'F';
  nome: string;
  telefone: string;
  email: string;
  nascimento: Date;
  RG: string;
  leito: string;
  id_hospital: number;
}

@injectable()
class UpdatePacienteService {
  constructor(
    @inject('PacientesRepository')
    private pacientesRepository: IPacientesRepository,

    @inject('HospitalRepository')
    private hospitalRepository: IHospitalRepository,
  ) {}

  public async execute(data: IRequest): Promise<Paciente> {
    const { id } = data;

    const paciente = await this.pacientesRepository.findById(id);

    if (!paciente) {
      throw new AppError('Pacient ID does not exist');
    }

    const {
      sexo = paciente.sexo,
      nome = paciente.nome,
      telefone = paciente.telefone,
      email = paciente.email,
      nascimento = paciente.nascimento,
      RG = paciente.RG,
      leito = paciente.leito,
      id_hospital = paciente.id_hospital,
    } = data;

    const emailExist = await this.pacientesRepository.findByEmail(email);

    if (emailExist && email !== paciente.email) {
      throw new AppError('E-mail already in use');
    }

    const pacienteRGExist = await this.pacientesRepository.findByRG(RG);

    if (pacienteRGExist && RG !== paciente.RG) {
      throw new AppError('Patient already exists');
    }

    const checkHospitalId = await this.hospitalRepository.findById(id_hospital);

    if (!checkHospitalId) {
      throw new AppError('Hospital ID does not exist');
    }

    return this.pacientesRepository.save({
      id,
      cod: paciente.cod,
      sexo,
      nome,
      telefone,
      email,
      nascimento,
      RG,
      leito,
      id_hospital,
    });
  }
}

export { UpdatePacienteService };
