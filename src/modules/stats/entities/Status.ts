import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Paciente } from '../../patients/entities/Paciente';

@Entity('Stats')
class Status {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  estado: string;

  @Column('datetime')
  hora: Date;

  @Column()
  medicamento: string;

  @Column()
  alimentacao: string;

  @Column()
  observacao: string;

  @Column()
  id_paciente: number;

  @ManyToOne(() => Paciente, { eager: true })
  @JoinColumn({ name: 'id_paciente' })
  paciente: Paciente;
}

export { Status };
