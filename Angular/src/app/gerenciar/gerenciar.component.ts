import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {
  situacao: string;
  formulario: FormGroup;
  Clientes: Cliente;


  // gerenciar ta funcionando; adicionando clientes normalmente

  // meio pronto falta colocar pra atualizar la em listagem, nao aparece o contato apos adicionar




  constructor(private servico: ServicoService, private formBuilder: FormBuilder, private router: Router) {

    this.formulario = this.formBuilder.group({
      codigo: [null],
      nome: [null],
      email: [null],
      credito: [null],
      situacao: [null]
    });
   }

  ngOnInit() {}

  Add() {
      this.formulario.value.situacao = this.situacao;

      if (this.formulario.value.situacao != null)
      {
        this.Clientes = this.formulario.value;
        this.servico.Adicionar(this.Clientes).subscribe((add) => {
          if(add.response){
            this.router.navigate([ 'listar' ])
          }
        });
        this.router.navigate(['listar']);
      }
    }

  ativo(){
    this.situacao = 'Ativo';
  }
  inativo(){
    this.situacao = 'Inativo';
  }
}
