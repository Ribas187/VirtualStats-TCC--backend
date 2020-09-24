import { container } from 'tsyringe';
import { HospitalRepository } from '../modules/hospitals/repositories/HospitalRepository';
import { IHospitalRepository } from '../modules/hospitals/repositories/IHospitalRepository';

container.registerSingleton<IHospitalRepository>(
  'HospitalRepository',
  HospitalRepository,
);
