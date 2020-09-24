import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateHospitalService } from '../services/CreateHospitalService';

class HospitalController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { cnpj, cep, nome, telefone, email, endereco } = req.body;

    const createHospital = container.resolve(CreateHospitalService);

    const hospital = await createHospital.execute({
      cep,
      cnpj,
      email,
      endereco,
      nome,
      telefone,
    });

    return res.json(hospital);
  }
}

export { HospitalController };
