import { Router } from 'express';
import { AdmController } from '../controllers/AdmController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const admRoutes = Router();
const admController = new AdmController();

admRoutes.post('/', admController.create);

admRoutes.use(ensureAuthenticated);

admRoutes.put('/', admController.update);

export { admRoutes };
