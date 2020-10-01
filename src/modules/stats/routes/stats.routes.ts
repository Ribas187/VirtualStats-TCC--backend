import { Router } from 'express';
import { StatsController } from '../controllers/StatsController';

const statsRoutes = Router();
const statsController = new StatsController();

statsRoutes.post('/:id_paciente', statsController.create);

export { statsRoutes };
