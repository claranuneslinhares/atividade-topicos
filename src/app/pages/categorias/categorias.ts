import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias implements OnInit {

  categorias: Categoria[] = [];

  categoria: Categoria = {
    categoriaID: 0,
    nome: '',
    descricao: '',
    ativo: 'S'
  };

  editando = false;

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.categoriaService.listar().subscribe({
      next: (dados) => {
        this.categorias = dados;
      },
      error: (erro) => {
        console.error('Erro ao buscar categorias:', erro);
        alert('Erro ao buscar categorias.');
      }
    });
  }

  salvar(): void {

    if (!this.categoria.nome || !this.categoria.descricao) {
      alert('Preencha nome e descrição.');
      return;
    }

    if (this.editando) {

      this.categoriaService
        .atualizar(this.categoria.categoriaID, this.categoria)
        .subscribe({
          next: () => {
            alert('Categoria atualizada com sucesso!');
            this.limpar();
            this.listar();
          },
          error: (erro) => {
            console.error(erro);
            alert('Erro ao atualizar categoria.');
          }
        });

    } else {

      this.categoriaService
        .adicionar(this.categoria)
        .subscribe({
          next: () => {
            alert('Categoria cadastrada com sucesso!');
            this.limpar();
            this.listar();
          },
          error: (erro) => {
            console.error(erro);
            alert('Erro ao cadastrar categoria.');
          }
        });
    }
  }

  editar(categoria: Categoria): void {
    this.categoria = { ...categoria };
    this.editando = true;
  }

  excluir(id: number): void {

    if (!confirm('Deseja realmente excluir esta categoria?')) {
      return;
    }

    this.categoriaService.excluir(id).subscribe({
      next: () => {
        alert('Categoria excluída com sucesso!');
        this.listar();
      },
      error: (erro) => {
        console.error(erro);
        alert('Erro ao excluir categoria.');
      }
    });
  }

  limpar(): void {
    this.categoria = {
      categoriaID: 0,
      nome: '',
      descricao: '',
      ativo: 'S'
    };

    this.editando = false;
  }
}