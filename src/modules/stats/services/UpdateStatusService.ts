import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { Status } from '../entities/Status';
import { IStatsRepository } from '../repositories/IStatsRepository';

interface IRequest {
  id: number;
  estado?: string;
  hora?: Date;
  medicamento?: string;
  alimentacao?: string;
  observacao?: string;
}

@injectable()
class UpdateStatusService {
  constructor(
    @inject('StatsRepository')
    private statsRepository: IStatsRepository,
  ) {}

  public async execute(data: IRequest): Promise<Status> {
    const { id } = data;

    const status = await this.statsRepository.findById(id);

    if (!status) {
      throw new AppError('Status ID does not exist.');
    }

    const {
      estado = status.estado,
      hora = status.hora,
      medicamento = status.medicamento,
      alimentacao = status.alimentacao,
      observacao = status.observacao,
    } = data;

    return this.statsRepository.save({
      id,
      estado,
      alimentacao,
      hora,
      medicamento,
      observacao,
      id_paciente: status.id_paciente,
    });
  }
}

export { UpdateStatusService };
