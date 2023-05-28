import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UnicEmail } from '../validacao/email-validator';

export class AddUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  nome: string;

  @IsEmail()
  @UnicEmail({
    message: 'Já existe um usuário cadastrado com esse e-mail!',
  })
  @IsNotEmpty({ message: 'O email não pode ser vazio!' })
  email: string;

  @MinLength(6, { message: 'A senha deve possuir no mínimo 6 caracteres!' })
  @IsNotEmpty({ message: 'A senha não pode ser vazia!' })
  senha: string;
}
