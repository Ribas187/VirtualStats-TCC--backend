import { Router } from 'express';
import { StatsPacienteController } from '../controllers/StatsPacienteController';

const statsPacienteRoutes = Router();
const statsPacienteController = new StatsPacienteController();

statsPacienteRoutes.get('/:id_paciente', statsPacienteController.index);

statsPacienteRoutes.get('/last/:id_paciente', statsPacienteController.showLast);

export { statsPacienteRoutes };
