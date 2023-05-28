import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { UnicEmail } from '../validacao/email-validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @UnicEmail({
    message: 'Já existe um usuário cadastrado com esse e-mail!',
  })
  @IsNotEmpty({ message: 'O email não pode ser vazio!' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha deve possuir no mínimo 6 caracteres!' })
  @IsNotEmpty({ message: 'A senha não pode ser vazia!' })
  @IsOptional()
  senha: string;
}
