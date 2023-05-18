import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  nome: string;

  @IsEmail()
  @IsNotEmpty({ message: 'O email não pode ser vazio!' })
  email: string;

  @MinLength(6, { message: 'A senha deve possuir no mínimo 6 caracteres!' })
  @IsNotEmpty({ message: 'A senha não pode ser vazia!' })
  senha: string;
}
