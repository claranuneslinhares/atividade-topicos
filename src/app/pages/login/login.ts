import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  usuario = '';
  senha = '';

  constructor(private authService: AuthService) {}

  entrar(): void {

    if (!this.usuario || !this.senha) {
      alert('Preencha usuário e senha.');
      return;
    }

    this.authService.login({
      usuario: this.usuario,
      senha: this.senha
    }).subscribe({
      next: (resposta) => {
        this.authService.salvarToken(resposta);

        alert('Login realizado com sucesso!');
        window.location.reload();
        console.log('Usuário:', resposta.usuario);
        console.log('Tipo:', resposta.tipo);
        console.log('Token:', resposta.token);
      },

      error: (erro) => {
        console.error(erro);
        alert('Usuário ou senha inválidos.');
      }
    });
  }
}