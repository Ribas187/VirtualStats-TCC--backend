import { ICreatePacienteDTO } from '../DTOs/ICreatePacienteDTO';
import { Paciente } from '../entities/Paciente';

export interface IPacientesRepository {
  findByEmail(email: string): Promise<Paciente | undefined>;
  findById(id: number): Promise<Paciente | undefined>;
  findByRG(rg: string): Promise<Paciente | undefined>;
  findByCod(cod: string): Promise<Paciente | undefined>;
  findByHospitalId(id: number): Promise<Paciente[]>;
  findAll(): Promise<Paciente[]>;
  save(data: Omit<Paciente, 'hospital'>): Promise<Paciente>;
  create(data: ICreatePacienteDTO): Promise<Paciente>;
}
