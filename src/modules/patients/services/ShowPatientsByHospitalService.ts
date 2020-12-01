import { inject, injectable } from 'tsyringe';
import { Paciente } from '../entities/Paciente';
import { IPacientesRepository } from '../repositories/IPacientesRepository';

@injectable()
class ShowPatientsByHospitalService {
  constructor(
    @inject('PacientesRepository')
    private pacientesRepository: IPacientesRepository,
  ) {}

  public async execute(hospital_id: number): Promise<Paciente[]> {
    const pacientes = await this.pacientesRepository.findByHospitalId(
      hospital_id,
    );

    return pacientes;
  }
}

export { ShowPatientsByHospitalService };
