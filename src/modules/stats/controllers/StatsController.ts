import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateStatusService } from '../services/CreateStatusService';
import { ShowStatusByIdService } from '../services/ShowStatusByIdService';
import { UpdateStatusService } from '../services/UpdateStatusService';

class StatsController {
  public async show(req: Request, res: Response): Promise<Response> {
    const { id, cod_paciente } = req.params;

    const showById = container.resolve(ShowStatusByIdService);

    const status = await showById.execute({
      cod_paciente,
      id: Number(id),
    });

    return res.json(status);
  }

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

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { alimentacao, estado, hora, medicamento, observacao } = req.body;

    const updateService = container.resolve(UpdateStatusService);

    const status = await updateService.execute({
      id: Number(id),
      alimentacao,
      estado,
      hora,
      medicamento,
      observacao,
    });

    return res.json(status);
  }
}

export { StatsController };
