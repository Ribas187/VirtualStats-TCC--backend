import { Router } from 'express';
import { hospitalRoutes } from '../modules/hospitals/routes/hospital.routes';

const routes = Router();

routes.use('/hospitals', hospitalRoutes);

export { routes };
