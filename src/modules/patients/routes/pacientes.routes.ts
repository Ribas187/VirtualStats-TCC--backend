import { Router } from 'express';
import { PacienteController } from '../controllers/PacienteController';

const pacientesRoutes = Router();
const pacienteController = new PacienteController();

// Mostra um registro pelo cod
pacientesRoutes.get('/:cod', pacienteController.show);

pacientesRoutes.get('/', pacienteController.index);

// Cria um registro
pacientesRoutes.post('/', pacienteController.create);
// Edita um registro
pacientesRoutes.put('/:id', pacienteController.update);

export { pacientesRoutes };
