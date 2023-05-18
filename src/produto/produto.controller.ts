import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRespository: ProdutoRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoProduto: CriaProdutoDTO) {
    this.produtoRespository.salvar(dadosDoProduto);
    return { message: 'Produto Cadastrado!' };
  }

  @Get()
  async listUsuarios() {
    return this.produtoRespository.listar();
  }
}
