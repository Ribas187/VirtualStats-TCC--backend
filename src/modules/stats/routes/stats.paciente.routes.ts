import { Router } from 'express';
import { StatsPacienteController } from '../controllers/StatsPacienteController';

const statsPacienteRoutes = Router();
const statsPacienteController = new StatsPacienteController();

statsPacienteRoutes.get('/:cod_paciente', statsPacienteController.index);

statsPacienteRoutes.get(
  '/last/:cod_paciente',
  statsPacienteController.showLast,
);

export { statsPacienteRoutes };
