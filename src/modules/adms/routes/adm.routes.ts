import { Router } from 'express';
import { AdmController } from '../controllers/AdmController';

const admRoutes = Router();
const admController = new AdmController();

admRoutes.post('/', admController.create);

export { admRoutes };
