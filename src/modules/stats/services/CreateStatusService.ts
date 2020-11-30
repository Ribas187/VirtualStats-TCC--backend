import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { IPacientesRepository } from '../../patients/repositories/IPacientesRepository';
import { ICreateStatusDTO } from '../DTOs/ICreateStatusDTO';
import { Status } from '../entities/Status';
import { IStatsRepository } from '../repositories/IStatsRepository';

@injectable()
class CreateStatusService {
  constructor(
    @inject('StatsRepository')
    private statsRepository: IStatsRepository,

    @inject('PacientesRepository')
    private pacientesRepository: IPacientesRepository,
  ) {}

  public async execute(data: ICreateStatusDTO): Promise<Status> {
    const { id_paciente, hora } = data;

    const patientExists = await this.pacientesRepository.findById(id_paciente);

    if (!patientExists) {
      throw new AppError('Patient ID does not exist');
    }

    const timeExists = await this.statsRepository.findByTime(hora);

    if (timeExists?.id_paciente === id_paciente) {
      throw new AppError('Patient has already an status at this time');
    }

    const status = await this.statsRepository.create({
      ...data,
      hora: new Date(),
    });

    return status;
  }
}

export { CreateStatusService };
