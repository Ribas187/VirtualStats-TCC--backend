import { inject, injectable } from 'tsyringe';
import { Paciente } from '../entities/Paciente';
import { IPacientesRepository } from '../repositories/IPacientesRepository';

@injectable()
class ShowAllPacientesService {
  constructor(
    @inject('PacientesRepository')
    private pacientesRepository: IPacientesRepository,
  ) {}

  public async execute(): Promise<Paciente[]> {
    const pacientes = await this.pacientesRepository.findAll();

    return pacientes;
  }
}

export { ShowAllPacientesService };
