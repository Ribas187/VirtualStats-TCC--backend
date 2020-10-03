import { getRepository, Repository } from 'typeorm';
import { ICreateAdmDTO } from '../DTOs/ICreateAdmDTO';
import { Adm } from '../entities/Adm';
import { IAdmRepository } from './IAdmRepository';

class AdmRepository implements IAdmRepository {
  private ormRepository: Repository<Adm>;

  constructor() {
    this.ormRepository = getRepository(Adm);
  }

  public async findById(id: number): Promise<Adm | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findByEmail(email: string): Promise<Adm | undefined> {
    return this.ormRepository.findOne({ where: { email } });
  }

  public async save(admData: Omit<Adm, 'hospital'>): Promise<Adm> {
    return this.ormRepository.save(admData);
  }

  public async create(admData: ICreateAdmDTO): Promise<Adm> {
    const adm = this.ormRepository.create(admData);

    await this.ormRepository.save(adm);

    return adm;
  }
}

export { AdmRepository };
