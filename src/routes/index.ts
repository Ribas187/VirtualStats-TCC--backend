import { Router } from 'express';
import { admRoutes } from '../modules/adms/routes/adm.routes';
import { sessionRoutes } from '../modules/adms/routes/session.routes';
import { hospitalRoutes } from '../modules/hospitals/routes/hospital.routes';
import { pacientesRoutes } from '../modules/patients/routes/pacientes.routes';
import { statsPacienteRoutes } from '../modules/stats/routes/stats.paciente.routes';
import { statsRoutes } from '../modules/stats/routes/stats.routes';

const routes = Router();

routes.use('/hospitals', hospitalRoutes);
routes.use('/patients', pacientesRoutes);
routes.use('/stats', statsRoutes);
routes.use('/stats/patient', statsPacienteRoutes);
routes.use('/session', sessionRoutes);
routes.use('/adm', admRoutes);

export { routes };
