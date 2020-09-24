import { inject, injectable } from 'tsyringe';
import { Hospital } from '../entities/Hospital';
import { IHospitalRepository } from '../repositories/IHospitalRepository';

@injectable()
class DeleteHospitalService {
  constructor(
    @inject('HospitalRepository')
    private hospitalRepository: IHospitalRepository,
  ) {}

  public async execute(id: number): Promise<Hospital> {
    const hospital = await this.hospitalRepository.findById(id);

    if (!hospital) {
      throw new Error('ID does not exists');
    }

    const deleted = await this.hospitalRepository.delete(hospital);

    return deleted;
  }
}

export { DeleteHospitalService };
