import { Router } from 'express';
import { hospitalRoutes } from '../modules/hospitals/routes/hospital.routes';
import { pacientesRoutes } from '../modules/patients/routes/pacientes.routes';

const routes = Router();

routes.use('/hospitals', hospitalRoutes);
routes.use('/patients', pacientesRoutes);

export { routes };
