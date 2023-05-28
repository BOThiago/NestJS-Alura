import { Injectable } from '@nestjs/common';
import { UserEntity } from './usuario.entity';
import { retry } from 'rxjs';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async salvar(user: UserEntity) {
    this.users.push(user);
  }

  async listar() {
    return this.users;
  }

  async verifyEmail(email: string) {
    const probablyUser = this.users.find((user) => user.email === email);

    return probablyUser !== undefined;
  }

  private FindUserById(id: string) {
    const probablyUser = this.users.find((savedUser) => savedUser.id === id);

    if (!probablyUser) {
      throw new Error('Usuário não existe !');
    }

    return probablyUser;
  }

  async update(id: string, updateUserData: Partial<UserEntity>) {
    const user = this.FindUserById(id);

    Object.entries(updateUserData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      user[key] = value;
    });

    return user;
  }

  async remove(id: string) {
    const user = this.FindUserById(id);
    this.users = this.users.filter((userSaved) => userSaved.id !== id);

    return user;
  }
}
