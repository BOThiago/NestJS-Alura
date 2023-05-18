import { IsNotEmpty } from 'class-validator';

export class ImagensProdutoDTO {
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  descricao: string;
}
