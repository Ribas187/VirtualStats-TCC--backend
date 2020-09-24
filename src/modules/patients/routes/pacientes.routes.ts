import { Router } from 'express';
import { PacienteController } from '../controllers/PacienteController';

const pacientesRoutes = Router();
const pacienteController = new PacienteController();

// Mostra um registro pelo id
pacientesRoutes.get('/:id', pacienteController.show);

// Cria um registro
pacientesRoutes.post('/', pacienteController.create);

export { pacientesRoutes };
