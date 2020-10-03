import { Router } from 'express';
import { ensureAuthenticated } from '../../adms/middlewares/ensureAuthenticated';
import { PacienteController } from '../controllers/PacienteController';

const pacientesRoutes = Router();
const pacienteController = new PacienteController();

// Mostra um registro pelo cod
pacientesRoutes.get('/:cod', pacienteController.show);

pacientesRoutes.use(ensureAuthenticated);

// Lista todos os pacientes
pacientesRoutes.get('/', pacienteController.index);

// Cria um registro
pacientesRoutes.post('/', pacienteController.create);
// Edita um registro
pacientesRoutes.put('/:id', pacienteController.update);

export { pacientesRoutes };
