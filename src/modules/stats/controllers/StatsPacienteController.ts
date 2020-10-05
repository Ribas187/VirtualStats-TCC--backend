import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ShowAllStatsByPatientCodService } from '../services/ShowAllStatsByPatientCodService';
import { ShowLastInfoService } from '../services/ShowLastInfoService';

class StatsPacienteController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { cod_paciente } = req.params;

    const showAllByPatientCod = container.resolve(
      ShowAllStatsByPatientCodService,
    );

    const stats = await showAllByPatientCod.execute(cod_paciente);

    return res.json(stats);
  }

  public async showLast(req: Request, res: Response): Promise<Response> {
    const { cod_paciente } = req.params;

    const showLastStatus = container.resolve(ShowLastInfoService);

    const status = await showLastStatus.execute(cod_paciente);

    return res.json(status);
  }
}

export { StatsPacienteController };
