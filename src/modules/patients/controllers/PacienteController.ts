import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePacienteService } from '../services/CreatePacienteService';
import { ShowAllPacientesService } from '../services/ShowAllPacientesService';
import { ShowOnePacienteService } from '../services/ShowOnePacienteService';
import { UpdatePacienteService } from '../services/UpdatePacienteService';

class PacienteController {
  public async index(req: Request, res: Response): Promise<Response> {
    const showAllPacientes = container.resolve(ShowAllPacientesService);

    const pacientes = await showAllPacientes.execute();

    return res.json(pacientes);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { cod } = req.params;

    const showPaciente = container.resolve(ShowOnePacienteService);

    const paciente = await showPaciente.execute(cod);

    return res.json(paciente);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const {
      RG,
      email,
      id_hospital,
      leito,
      nascimento,
      nome,
      sexo,
      telefone,
    } = req.body;

    const createPaciente = container.resolve(CreatePacienteService);

    const paciente = await createPaciente.execute({
      RG,
      email,
      id_hospital,
      leito,
      nascimento,
      nome,
      sexo,
      telefone,
    });

    return res.json(paciente);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      RG,
      email,
      id_hospital,
      leito,
      nascimento,
      nome,
      sexo,
      telefone,
    } = req.body;

    const updatePaciente = container.resolve(UpdatePacienteService);

    const paciente = await updatePaciente.execute({
      RG,
      id: Number(id),
      email,
      id_hospital,
      leito,
      nascimento,
      nome,
      sexo,
      telefone,
    });

    return res.json(paciente);
  }
}

export { PacienteController };
