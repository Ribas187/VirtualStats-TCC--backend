import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { Status } from '../entities/Status';
import { IStatsRepository } from '../repositories/IStatsRepository';

@injectable()
class DeleteStatusService {
  constructor(
    @inject('StatsRepository')
    private statsRepository: IStatsRepository,
  ) {}

  public async execute(id: number): Promise<Status> {
    const status = await this.statsRepository.findById(id);

    if (!status) {
      throw new AppError('Status ID does not exist');
    }

    const deleted = await this.statsRepository.delete(status);

    return deleted;
  }
}

export { DeleteStatusService };
