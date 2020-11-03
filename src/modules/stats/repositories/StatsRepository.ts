import { EntityRepository, getRepository, Repository } from 'typeorm';
import { ICreateStatusDTO } from '../DTOs/ICreateStatusDTO';
import { Status } from '../entities/Status';
import { IStatsRepository } from './IStatsRepository';

@EntityRepository(Status)
class StatsRepository implements IStatsRepository {
  private ormRepository: Repository<Status>;

  constructor() {
    this.ormRepository = getRepository(Status);
  }

  public async findById(id: number): Promise<Status | undefined> {
    const status = await this.ormRepository.findOne(id);

    return status;
  }

  public async findByPatientId(id: number): Promise<Status[]> {
    const stats = await this.ormRepository.find({
      where: { id_paciente: id },
      order: { hora: 'DESC' },
    });

    return stats;
  }

  public async findByTime(time: Date): Promise<Status | undefined> {
    const stats = await this.ormRepository.findOne({ where: { hora: time } });

    return stats;
  }

  public async findLastStats(id: number): Promise<Status> {
    const stats = await this.ormRepository.find({
      where: { id_paciente: id },
      order: { hora: 'DESC' },
    });

    const lastStatus = stats[0];

    return lastStatus;
  }

  public async findAll(): Promise<Status[]> {
    return this.ormRepository.find();
  }

  public async save(statsData: Omit<Status, 'paciente'>): Promise<Status> {
    const stats = await this.ormRepository.save(statsData);

    return stats;
  }

  public async create(statsData: ICreateStatusDTO): Promise<Status> {
    const stats = this.ormRepository.create(statsData);

    await this.ormRepository.save(stats);

    return stats;
  }
}

export { StatsRepository };
