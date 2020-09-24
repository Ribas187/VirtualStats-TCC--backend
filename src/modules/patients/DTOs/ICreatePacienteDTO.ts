export interface ICreatePacienteDTO {
  cod: string;
  sexo: 'M' | 'F';
  nome: string;
  telefone: string;
  email: string;
  nascimento: Date;
  RG: string;
  leito: string;
  id_hospital: number;
}
