import { ProdutoModule } from './produto/produto.module';
import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ProdutoModule, UsuarioModule],
})
export class AppModule {}
