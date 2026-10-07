import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  usuario: string;
  senha: string;
}

export interface LoginResponse {
  autenticado: boolean;
  usuario: string;
  tipo: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5236/api/Auth';

  constructor(private http: HttpClient) {}

  login(dados: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      dados
    );
  }

  salvarToken(resposta: LoginResponse): void {
    localStorage.setItem('token', resposta.token);
    localStorage.setItem('usuario', resposta.usuario);
    localStorage.setItem('tipo', resposta.tipo);
  }

  obterToken(): string | null {
    return localStorage.getItem('token');
  }

  obterTipo(): string | null {
    return localStorage.getItem('tipo');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('tipo');
  }
}