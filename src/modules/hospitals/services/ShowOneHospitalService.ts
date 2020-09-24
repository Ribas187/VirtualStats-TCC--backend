import { inject, injectable } from 'tsyringe';
import { Hospital } from '../entities/Hospital';
import { IHospitalRepository } from '../repositories/IHospitalRepository';

@injectable()
class ShowOneHospitalService {
  constructor(
    @inject('HospitalRepository')
    private hospitalRepository: IHospitalRepository,
  ) {}

  public async execute(id: number): Promise<Hospital> {
    const hospital = await this.hospitalRepository.findById(id);

    if (!hospital) {
      throw new Error('ID does not exists');
    }

    return hospital;
  }
}

export { ShowOneHospitalService };
