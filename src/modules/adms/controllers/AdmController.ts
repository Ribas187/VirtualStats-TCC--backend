import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAdmService } from '../services/CreateAdmService';
import { UpdateAdmService } from '../services/UpdateAdmService';

class AdmController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, senha, id_hospital, nome, telefone } = req.body;

    const createAdm = container.resolve(CreateAdmService);

    const adm = await createAdm.execute({
      email,
      senha,
      id_hospital,
      nome,
      telefone,
    });

    return res.json(adm);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.adm;
    const {
      email,
      senha,
      id_hospital,
      nome,
      telefone,
      senha_antiga,
    } = req.body;

    const updateAdm = container.resolve(UpdateAdmService);

    const adm = await updateAdm.execute({
      id: Number(id),
      email,
      senha_antiga,
      senha,
      id_hospital,
      nome,
      telefone,
    });

    return res.json(adm);
  }
}

export { AdmController };
