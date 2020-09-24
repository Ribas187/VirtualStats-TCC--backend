import { ICreateHospitalDTO } from '../DTOs/ICreateHospitalDTO';
import { Hospital } from '../entities/Hospital';

export interface IHospitalRepository {
  create(data: ICreateHospitalDTO): Promise<Hospital>;
  save(data: Hospital): Promise<Hospital>;
  findById(id: number): Promise<Hospital | undefined>;
  findByCNPJ(cnpj: string): Promise<Hospital | undefined>;
  findAll(): Promise<Hospital[]>;
}
