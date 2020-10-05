import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { IPacientesRepository } from '../../patients/repositories/IPacientesRepository';
import { Status } from '../entities/Status';
import { IStatsRepository } from '../repositories/IStatsRepository';

@injectable()
class ShowLastInfoService {
  constructor(
    @inject('StatsRepository')
    private statsRepository: IStatsRepository,

    @inject('PacientesRepository')
    private pacientesRepository: IPacientesRepository,
  ) {}

  public async execute(cod: string): Promise<Status> {
    const patientExists = await this.pacientesRepository.findByCod(cod);

    if (!patientExists) {
      throw new AppError('Patient code does not exist');
    }

    const status = await this.statsRepository.findLastStats(patientExists.id);

    return status;
  }
}

export { ShowLastInfoService };
