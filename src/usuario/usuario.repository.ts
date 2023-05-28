import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async salvar(user) {
    this.users.push(user);
  }

  async listar() {
    return this.users;
  }

  async verifyEmail(email: string) {
    const ProbalyUser = this.users.find((user) => user.email === email);

    return ProbalyUser !== undefined;
  }
}
