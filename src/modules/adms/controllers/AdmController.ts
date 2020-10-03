import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAdmService } from '../services/CreateAdmService';

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
}

export { AdmController };
