import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './usuario.repository';
import { AddUserDTO } from './dto/CriaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private userRespository: UserRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: AddUserDTO) {
    this.userRespository.salvar(dadosDoUsuario);
    return { message: 'Usuário Cadastrado!' };
  }

  @Get()
  async listUsuarios() {
    return this.userRespository.listar();
  }
}
