import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Hospital } from '../../hospitals/entities/Hospital';

@Entity('Adm')
class Adm {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  id_hospital: number;

  @ManyToOne(() => Hospital, { eager: true })
  @JoinColumn({ name: 'id_hospital' })
  hospital: Hospital;
}

export { Adm };
