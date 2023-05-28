import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './usuario.repository';
import { AddUserDTO } from './dto/CriaUsuario.dto';
import { UserEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
import { UserListDTO } from './validacao/userList.dto';
import { UpdateUserDTO } from './dto/Update.User.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private userRespository: UserRepository) {}

  @Post()
  async criaUsuario(@Body() userData: AddUserDTO) {
    const userEntity = new UserEntity();
    userEntity.id = uuid();
    userEntity.nome = userData.nome;
    userEntity.email = userData.email;
    userEntity.senha = userData.senha;

    const userListDTO = new UserListDTO(userEntity.id, userEntity.nome);

    this.userRespository.salvar(userEntity);
    return {
      messagem: `Usuário cadastrado com sucesso! Id do usuário: ${userListDTO.id} e nome do usuário: ${userListDTO.nome}.`,
    };
  }

  @Get()
  async listUsuarios() {
    const usersSaved = await this.userRespository.listar();
    const usersList = usersSaved.map(
      (user) => new UserListDTO(user.id, user.nome),
    );

    return usersList;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserData: UpdateUserDTO,
  ) {
    const userUpdated = await this.userRespository.update(id, updateUserData);
    const user = new UserListDTO(userUpdated.id, userUpdated.nome);

    return {
      user: userUpdated,
      messagem: `Usuário com o nome: ${user.nome} e id: ${user.id} atualizado com sucesso!`,
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const userDeleted = await this.userRespository.remove(id);
    const user = new UserListDTO(userDeleted.id, userDeleted.nome);

    return {
      usuario: user.id,
      messagem: `Usuário com o nome: ${user.nome} e id: ${user.id} deletado com sucesso!`,
    };
  }
}
