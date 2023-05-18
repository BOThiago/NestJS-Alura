import {
  IsArray,
  IsByteLength,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MinLength,
} from 'class-validator';
import { CaracteristicaProdutoDTO } from './CaracteristicaProduto.dto';
import { Type } from 'class-transformer';
import { ImagensProdutoDTO } from './ImagensProduto.dto';

export class CriaProdutoDTO {
  @IsNotEmpty({ message: 'O nome do produto é obrigatório!' })
  nome: string;

  @IsNotEmpty({ message: 'O valor do produto é obrigatório!' })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive({ message: 'O valor deve ser positivo!' })
  valor: number;

  @IsNotEmpty({ message: 'A quantidade disponivel do produto é obrigatória!' })
  @IsNumber()
  quantidadeDisponivel: number;

  @IsNotEmpty({
    message: 'A descrição do produto é obrigatória!',
  })
  @IsByteLength(1, 1000, {
    message:
      'O campo descrição não pode ser nulo, ou possuir mais de 1000 caracteres!',
  })
  descricao: string;

  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  @IsNotEmpty({
    message: 'As caracteristicas nome e descrição são obrigatórias!',
  })
  @MinLength(3, {
    message: 'O produto precisa ter pelo menos 3 caracteristicas!',
  })
  caracteristicas: CaracteristicaProdutoDTO[];

  @IsArray()
  @Type(() => ImagensProdutoDTO)
  @IsNotEmpty({
    message: 'As imagens com url e descrição são obrigatórias!',
  })
  @MinLength(1, {
    message: 'O produto precisa ter pelo menos uma imagem!',
  })
  imagens: ImagensProdutoDTO[];

  @IsNotEmpty({ message: 'A categoria do produto é obrigatória!' })
  categoria: string;

  @IsNotEmpty({ message: 'A data de criação do produto é obrigatória!' })
  @IsDateString(undefined, {
    message: 'A data deve estar em formato de string!',
  })
  dataCriacao: Date;

  @IsNotEmpty({ message: 'A data de atualização do produto é obrigatória!' })
  @IsDateString(undefined, {
    message: 'A data deve estar em formato de string!',
  })
  dataAtualizacao: Date;
}
