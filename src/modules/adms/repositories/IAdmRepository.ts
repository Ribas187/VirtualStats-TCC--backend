import { ICreateAdmDTO } from '../DTOs/ICreateAdmDTO';
import { Adm } from '../entities/Adm';

export interface IAdmRepository {
  findByEmail(email: string): Promise<Adm | undefined>;
  create(data: ICreateAdmDTO): Promise<Adm>;
}
