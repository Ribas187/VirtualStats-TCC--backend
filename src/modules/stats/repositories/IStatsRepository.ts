import { ICreateStatusDTO } from '../DTOs/ICreateStatusDTO';
import { Status } from '../entities/Status';

export interface IStatsRepository {
  findById(id: number): Promise<Status | undefined>;
  findByPatientId(id: number): Promise<Status[]>;
  findByTime(time: Date): Promise<Status | undefined>;
  findLastStats(id: number): Promise<Status>;
  findAll(): Promise<Status[]>;
  save(data: Omit<Status, 'paciente'>): Promise<Status>;
  create(data: ICreateStatusDTO): Promise<Status>;
}
