import { IsNotEmpty } from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsNotEmpty({ message: 'O nome da característica não pode ser vazio!' })
  nome: string;

  @IsNotEmpty({ message: 'A descrição da característica não pode ser vazia!' })
  descricao: string;
}
