import { inject, injectable } from 'tsyringe';
import { uuid } from 'uuidv4';
import AppError from '../../../errors/AppError';
import { IHospitalRepository } from '../../hospitals/repositories/IHospitalRepository';
import { Paciente } from '../entities/Paciente';
import { IPacientesRepository } from '../repositories/IPacientesRepository';

interface IRequest {
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
class CreatePacienteService {
  constructor(
    @inject('PacientesRepository')
    private pacientesRepository: IPacientesRepository,

    @inject('HospitalRepository')
    private hospitalRepository: IHospitalRepository,
  ) {}

  public async execute(data: IRequest): Promise<Paciente> {
    const { email, id_hospital } = data;

    const pacienteExist = await this.pacientesRepository.findByEmail(email);

    if (pacienteExist) {
      throw new AppError('Patient already exists');
    }

    const checkHospitalId = await this.hospitalRepository.findById(id_hospital);

    if (!checkHospitalId) {
      throw new AppError('Hospital ID does not exist');
    }

    const codPaciente = uuid();

    const paciente = await this.pacientesRepository.create({
      ...data,
      cod: codPaciente,
    });

    return paciente;
  }
}

export { CreatePacienteService };
