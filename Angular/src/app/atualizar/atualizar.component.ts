import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ServicoService } from '../servico.service';

@Component({
	selector: 'app-atualizar',
	templateUrl: './atualizar.component.html',
	styleUrls: [ './atualizar.component.css' ]
})
export class AtualizarComponent implements OnInit {
	cliente: Cliente;
	formulario: FormGroup;
	id: number;

	constructor(
		private servico: ServicoService,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private router: Router
	) {
		this.getCliente();
	}

	ngOnInit() {
		this.formulario = this.formBuilder.group({
			nome: [ null ],
			email: [ null ],
			credito: [ null ],
			situacao: [ null ]
		});
	}

	getCliente() {
		this.servico.Detalhar(this.servico.detalheCodigo).subscribe((cliente) => {
			this.cliente = cliente[0];
			this.formulario.controls.nome.setValue(this.cliente.nome);
			this.formulario.controls.email.setValue(this.cliente.email);
			this.formulario.controls.credito.setValue(this.cliente.credito);
			this.formulario.controls.situacao.setValue(this.cliente.situacao);
		});
	}

	Atualizar(){
		this.servico.atualizar(this.formulario.value).subscribe();

	}
}
