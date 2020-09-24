import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Hospital } from '../../hospitals/entities/Hospital';

@Entity('Pacientes')
class Paciente {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  cod: string;

  @Column()
  sexo: 'M' | 'F';

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column('date')
  nascimento: Date;

  @Column()
  RG: string;

  @Column()
  leito: string;

  @Column()
  id_hospital: number;

  @ManyToOne(() => Hospital, { eager: true })
  @JoinColumn({ name: 'id_hospital' })
  hospital: Hospital;
}

export { Paciente };
