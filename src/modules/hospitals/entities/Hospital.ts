import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Hospitais')
class Hospital {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  cnpj: string;

  @Column()
  cep: string;

  @Column()
  endereco: string;

  @Column()
  email: string;
}

export { Hospital };
