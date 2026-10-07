import { Component } from '@angular/core';
import { Login } from './pages/login/login';
import { Categorias } from './pages/categorias/categorias';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Login, Categorias],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  estaLogado = localStorage.getItem('token') !== null;

}