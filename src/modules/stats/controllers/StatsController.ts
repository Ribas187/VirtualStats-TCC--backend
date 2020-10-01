import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateStatusService } from '../services/CreateStatusService';

class StatsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id_paciente } = req.params;
    const { alimentacao, estado, hora, observacao, medicamento } = req.body;

    const createStats = container.resolve(CreateStatusService);

    const status = await createStats.execute({
      alimentacao,
      estado,
      hora,
      observacao,
      medicamento,
      id_paciente: Number(id_paciente),
    });

    return res.json(status);
  }
}

export { StatsController };
