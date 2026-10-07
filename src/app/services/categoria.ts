import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:5236/api/categorias';

  constructor(private http: HttpClient) {}

  listar(): Observable<Categoria[]> {
    const token = localStorage.getItem('token');

    return this.http.get<Categoria[]>(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  buscarPorId(id: number): Observable<Categoria> {
    const token = localStorage.getItem('token');

    return this.http.get<Categoria>(
      `${this.apiUrl}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  adicionar(categoria: Categoria): Observable<Categoria> {
    const token = localStorage.getItem('token');

    return this.http.post<Categoria>(
      this.apiUrl,
      categoria,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  atualizar(id: number, categoria: Categoria): Observable<void> {
    const token = localStorage.getItem('token');

    return this.http.put<void>(
      `${this.apiUrl}/${id}`,
      categoria,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  excluir(id: number): Observable<void> {
    const token = localStorage.getItem('token');

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}