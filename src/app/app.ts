import { Component } from '@angular/core';
import { Categorias } from './pages/categorias/categorias';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Categorias],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}