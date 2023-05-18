import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRespository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    this.usuarioRespository.salvar(dadosDoUsuario);
    return { message: 'Usuário Cadastrado!' };
  }

  @Get()
  async listUsuarios() {
    return this.usuarioRespository.listar();
  }
}
