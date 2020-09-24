import { inject, injectable } from 'tsyringe';
import { Hospital } from '../entities/Hospital';
import { IHospitalRepository } from '../repositories/IHospitalRepository';

@injectable()
class ShowHospitalsService {
  constructor(
    @inject('HospitalRepository')
    private hospitalRepository: IHospitalRepository,
  ) {}

  public async execute(): Promise<Hospital[]> {
    const hospitals = await this.hospitalRepository.findAll();

    return hospitals;
  }
}

export { ShowHospitalsService };
