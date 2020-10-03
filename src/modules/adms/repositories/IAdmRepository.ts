import { ICreateAdmDTO } from '../DTOs/ICreateAdmDTO';
import { Adm } from '../entities/Adm';

export interface IAdmRepository {
  findById(id: number): Promise<Adm | undefined>;
  findByEmail(email: string): Promise<Adm | undefined>;
  save(data: Omit<Adm, 'hospital'>): Promise<Adm>;
  create(data: ICreateAdmDTO): Promise<Adm>;
}
