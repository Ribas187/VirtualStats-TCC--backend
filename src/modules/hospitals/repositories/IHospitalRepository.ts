import { ICreateHospitalDTO } from '../DTOs/ICreateHospitalDTO';
import { Hospital } from '../entities/Hospital';

export interface IHospitalRepository {
  findById(id: number): Promise<Hospital | undefined>;
  findByCNPJ(cnpj: string): Promise<Hospital | undefined>;
  findByEmail(email: string): Promise<Hospital | undefined>;
  findAll(): Promise<Hospital[]>;
  create(data: ICreateHospitalDTO): Promise<Hospital>;
  save(data: Hospital): Promise<Hospital>;
  delete(data: Hospital): Promise<Hospital>;
}
