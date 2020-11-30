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

  public async findByCod(cod: string): Promise<Paciente | undefined> {
    const paciente = await this.ormRepository.findOne({ where: { cod } });

    return paciente;
  }

  public async findByEmail(email: string): Promise<Paciente | undefined> {
    const paciente = await this.ormRepository.findOne({ where: { email } });

    return paciente;
  }

  public async findByRG(rg: string): Promise<Paciente | undefined> {
    const paciente = await this.ormRepository.findOne({ where: { RG: rg } });

    return paciente;
  }

  public async findAll(): Promise<Paciente[]> {
    const pacientes = await this.ormRepository.find();

    return pacientes;
  }

  public async save(
    pacienteData: Omit<Paciente, 'hospital'>,
  ): Promise<Paciente> {
    return this.ormRepository.save(pacienteData);
  }

  public async create(pacienteData: ICreatePacienteDTO): Promise<Paciente> {
    const paciente = this.ormRepository.create(pacienteData);

    await this.ormRepository.save(paciente);

    return paciente;
  }
}

export { PacientesRepository };
