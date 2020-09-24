import { EntityRepository, getRepository, Repository } from 'typeorm';
import { ICreatePacienteDTO } from '../DTOs/ICreatePacienteDTO';
import { Paciente } from '../entities/Paciente';
import { IPacientesRepository } from './IPacientesRepository';

@EntityRepository(Paciente)
class PacientesRepository implements IPacientesRepository {
  private ormRepository: Repository<Paciente>;

  constructor() {
    this.ormRepository = getRepository(Paciente);
  }

  public async findById(id: number): Promise<Paciente | undefined> {
    const paciente = await this.ormRepository.findOne(id);

    return paciente;
  }

  public async findByEmail(email: string): Promise<Paciente | undefined> {
    const paciente = await this.ormRepository.findOne({ where: { email } });

    return paciente;
  }

  public async create(pacienteData: ICreatePacienteDTO): Promise<Paciente> {
    const paciente = this.ormRepository.create(pacienteData);

    await this.ormRepository.save(paciente);

    return paciente;
  }
}

export { PacientesRepository };
