import { Router } from 'express';
import { HospitalController } from '../controllers/HospitalController';

const hospitalRoutes = Router();
const hospitalController = new HospitalController();

hospitalRoutes.post('/', hospitalController.create);

export { hospitalRoutes };
