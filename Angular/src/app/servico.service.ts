import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
	providedIn: 'root'
})
export class ServicoService {
	//listaClientes: Cliente[] = [];
	detalheCodigo: number;
	//autenticado: boolean;
	//senha: any;

	constructor(private http: HttpClient) {}

	private Url = 'http://localhost:3000';

	getsenha(): Observable<any> {
		return this.http.get<any>(`${this.Url}/login`);
	}
	// meotodo para retornar os clientes do banco de dados
	Listar(): Observable<any> {
		return this.http.get<any>(`${this.Url}/cliente`);
	}

	// metodo para adicionar clientes no banco de dados
	Adicionar(cliente: Cliente): Observable<any> {
		return this.http.post(`${this.Url}/cliente`, cliente);
	}

	// metodo para excluir um registro
	Excluir(codigo: number): Observable<any> {
		console.log('SE');
		return this.http.delete<any>(`${this.Url}/cliente/${codigo}`);
	}

	// metodo para atualizar um registro
	atualizar(cliente: Cliente): Observable<any> {
		console.log("detalhe codigo aqui ------------- " + this.detalheCodigo)
		return this.http.put(`${this.Url}/cliente/${this.detalheCodigo}`, cliente);
	}
	// retornar valores de um unico cliente
	Detalhar(id: number): Observable<Cliente> {
		return this.http.get<Cliente>(`${this.Url}/cliente/${id}`);
	}
}


