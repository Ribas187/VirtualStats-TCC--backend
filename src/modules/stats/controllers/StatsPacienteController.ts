import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ShowAllStatsByPatientIdService } from '../services/ShowAllStatsByPatientIdService';
import { ShowLastInfoService } from '../services/ShowLastInfoService';

class StatsPacienteController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id_paciente } = req.params;

    const showAllByPatientId = container.resolve(
      ShowAllStatsByPatientIdService,
    );

    const stats = await showAllByPatientId.execute(Number(id_paciente));

    return res.json(stats);
  }

  public async showLast(req: Request, res: Response): Promise<Response> {
    const { id_paciente } = req.params;

    const showLastStatus = container.resolve(ShowLastInfoService);

    const status = await showLastStatus.execute(Number(id_paciente));

    return res.json(status);
  }
}

export { StatsPacienteController };
