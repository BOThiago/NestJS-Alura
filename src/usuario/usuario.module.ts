import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UserRepository } from './usuario.repository';
import { EmailValidator } from './validacao/email-validator';

@Module({
  controllers: [UsuarioController],
  providers: [UserRepository, EmailValidator],
})
export class UsuarioModule {}
