import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { IPacientesRepository } from '../../patients/repositories/IPacientesRepository';
import { Status } from '../entities/Status';
import { IStatsRepository } from '../repositories/IStatsRepository';

interface IRequest {
  id: number;
  cod_paciente: string;
}

@injectable()
class ShowStatusByIdService {
  constructor(
    @inject('StatsRepository')
    private statsRepository: IStatsRepository,

    @inject('PacientesRepository')
    private pacientesRepository: IPacientesRepository,
  ) {}

  public async execute(data: IRequest): Promise<Status> {
    const { cod_paciente, id } = data;

    const patientExists = await this.pacientesRepository.findByCod(
      cod_paciente,
    );

    if (!patientExists) {
      throw new AppError('Patient ID does not exist');
    }

    const status = await this.statsRepository.findById(id);

    if (!status) {
      throw new AppError('Status ID does not exist');
    }

    if (status.paciente.cod !== patientExists.cod) {
      throw new AppError("This Status doesn't match with this patient");
    }

    return status;
  }
}

export { ShowStatusByIdService };
