import { container } from 'tsyringe';
import { HospitalRepository } from '../modules/hospitals/repositories/HospitalRepository';
import { IHospitalRepository } from '../modules/hospitals/repositories/IHospitalRepository';
import { IPacientesRepository } from '../modules/patients/repositories/IPacientesRepository';
import { PacientesRepository } from '../modules/patients/repositories/PacientesRepository';

container.registerSingleton<IHospitalRepository>(
  'HospitalRepository',
  HospitalRepository,
);

container.registerSingleton<IPacientesRepository>(
  'PacientesRepository',
  PacientesRepository,
);
