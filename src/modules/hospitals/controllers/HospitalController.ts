import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateHospitalService } from '../services/CreateHospitalService';
import { DeleteHospitalService } from '../services/DeleteHospitalservice';
import { ShowHospitalsService } from '../services/ShowHospitalsService';
import { ShowOneHospitalService } from '../services/ShowOneHospitalService';
import { UpdateHospitalService } from '../services/UpdateHospitalService';

class HospitalController {
  public async index(req: Request, res: Response): Promise<Response> {
    const showHospitals = container.resolve(ShowHospitalsService);

    const hospitals = await showHospitals.execute();

    return res.json(hospitals);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const formattedId = Number(id);

    const showHospital = container.resolve(ShowOneHospitalService);

    const hospital = await showHospital.execute(formattedId);

    return res.json(hospital);
  }

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

  public async update(req: Request, res: Response): Promise<Response> {
    const { cnpj, cep, nome, telefone, email, endereco } = req.body;
    const { id } = req.params;

    const formattedId = Number(id);

    const updateHospital = container.resolve(UpdateHospitalService);

    const hospital = await updateHospital.execute({
      id: formattedId,
      cep,
      cnpj,
      email,
      endereco,
      nome,
      telefone,
    });

    return res.json(hospital);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteHospital = container.resolve(DeleteHospitalService);

    const deleted = await deleteHospital.execute(Number(id));

    return res.json(deleted);
  }
}

export { HospitalController };
