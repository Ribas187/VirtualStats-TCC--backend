import { getRepository, Repository } from 'typeorm';
import { ICreateHospitalDTO } from '../DTOs/ICreateHospitalDTO';
import { Hospital } from '../entities/Hospital';
import { IHospitalRepository } from './IHospitalRepository';

class HospitalRepository implements IHospitalRepository {
  private ormRepository: Repository<Hospital>;

  constructor() {
    this.ormRepository = getRepository(Hospital);
  }

  public async findById(id: number): Promise<Hospital | undefined> {
    const hospital = await this.ormRepository.findOne(id);

    return hospital;
  }

  public async findByCNPJ(cnpj: string): Promise<Hospital | undefined> {
    const hospital = await this.ormRepository.findOne({ where: { cnpj } });

    return hospital;
  }

  public async findAll(): Promise<Hospital[]> {
    const hospitais = await this.ormRepository.find();

    return hospitais;
  }

  public async create(hospitalData: ICreateHospitalDTO): Promise<Hospital> {
    const hospital = this.ormRepository.create(hospitalData);

    await this.ormRepository.save(hospital);

    return hospital;
  }

  public async save(hospital: Hospital): Promise<Hospital> {
    return this.ormRepository.save(hospital);
  }
}

export { HospitalRepository };
