import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ServicoService } from '../servico.service';

@Component({
	selector: 'app-listagem',
	templateUrl: './listagem.component.html',
	styleUrls: [ './listagem.component.css' ]
})
export class ListagemComponent implements OnInit {
	listaClientes: Cliente[] = [];

	constructor(private servico: ServicoService) {
		this.Exibir();
		console.log('OK');
	}

	ngOnInit() {}

	Exibir() {
		this.servico.Listar().subscribe((clientes) => {
			console.log(clientes);
			this.listaClientes = clientes;
		});
	}
}
