import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { Paciente } from '../entities/Paciente';
import { IPacientesRepository } from '../repositories/IPacientesRepository';

@injectable()
class ShowOnePacienteService {
  constructor(
    @inject('PacientesRepository')
    private pacientesRepository: IPacientesRepository,
  ) {}

  public async execute(id: number): Promise<Paciente> {
    const paciente = await this.pacientesRepository.findById(id);

    if (!paciente) {
      throw new AppError('Patient ID does not exist');
    }

    return paciente;
  }
}

export { ShowOnePacienteService };
