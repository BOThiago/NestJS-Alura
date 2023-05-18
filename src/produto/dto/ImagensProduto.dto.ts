import { IsNotEmpty } from 'class-validator';

export class ImagensProdutoDTO {
  @IsNotEmpty({ message: 'A url da imagem não pode ser vazia!' })
  url: string;

  @IsNotEmpty({ message: 'A descrição da imagem não pode ser vazia!' })
  descricao: string;
}
