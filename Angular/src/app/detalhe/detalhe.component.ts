import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ServicoService } from '../servico.service';

@Component({
	selector: 'app-detalhe',
	templateUrl: './detalhe.component.html',
	styleUrls: [ './detalhe.component.css' ]
})
export class DetalheComponent implements OnInit {
	listaClientes: Cliente[] = [];
	cliente: Cliente;
	codigo: number;
	id: number;

	constructor(private servico: ServicoService, private route: ActivatedRoute, private router: Router) {
		this.cliente = new Cliente();
		this.getId();
		this.getCliente();
	}
	ngOnInit() {}

	getId() {
		this.route.params.subscribe((data) => {
			this.id = data.id;
		});
	}

	getCliente() {
		this.servico.Detalhar(this.id).subscribe((clientes) => {
			this.cliente = clientes[0];
		});
	}

	//passar meu codigo pro serviço para usar em outro component
	Atualizar() {
		this.router.navigate([ 'atualizar' ]);
		this.servico.detalheCodigo = this.id;
	}
	Excluir(codigo: number) {
		console.log('EX');
		this.servico.Excluir(codigo).subscribe((deleted) => {
			if (deleted.response) {
				this.router.navigate([ 'listar' ]);
			}
		});
	}
}
