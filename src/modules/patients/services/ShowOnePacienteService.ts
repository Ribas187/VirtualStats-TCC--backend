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

  public async execute(cod: string): Promise<Paciente> {
    const paciente = await this.pacientesRepository.findByCod(cod);

    if (!paciente) {
      throw new AppError('Patient CODE does not exist');
    }

    return paciente;
  }
}

export { ShowOnePacienteService };
