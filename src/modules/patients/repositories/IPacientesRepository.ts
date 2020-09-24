import { ICreatePacienteDTO } from '../DTOs/ICreatePacienteDTO';
import { Paciente } from '../entities/Paciente';

export interface IPacientesRepository {
  findByEmail(email: string): Promise<Paciente | undefined>;
  findById(id: number): Promise<Paciente | undefined>;
  create(data: ICreatePacienteDTO): Promise<Paciente>;
}
