import { container } from 'tsyringe';
import { HospitalRepository } from '../modules/hospitals/repositories/HospitalRepository';
import { IHospitalRepository } from '../modules/hospitals/repositories/IHospitalRepository';

import { IPacientesRepository } from '../modules/patients/repositories/IPacientesRepository';
import { PacientesRepository } from '../modules/patients/repositories/PacientesRepository';

import { IStatsRepository } from '../modules/stats/repositories/IStatsRepository';
import { StatsRepository } from '../modules/stats/repositories/StatsRepository';

container.registerSingleton<IHospitalRepository>(
  'HospitalRepository',
  HospitalRepository,
);

container.registerSingleton<IPacientesRepository>(
  'PacientesRepository',
  PacientesRepository,
);

container.registerSingleton<IStatsRepository>(
  'StatsRepository',
  StatsRepository,
);
