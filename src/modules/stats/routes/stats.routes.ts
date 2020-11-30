import { Router } from 'express';
import { ensureAuthenticated } from '../../adms/middlewares/ensureAuthenticated';
import { StatsController } from '../controllers/StatsController';

const statsRoutes = Router();
const statsController = new StatsController();

statsRoutes.get('/:cod_paciente/:id', statsController.show);

statsRoutes.use(ensureAuthenticated);
statsRoutes.post('/:id_paciente', statsController.create);

statsRoutes.put('/:id', statsController.update);

statsRoutes.delete('/:id', statsController.delete);

export { statsRoutes };
