import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicoService } from '../servico.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';
  mensagem = '';

  constructor(private servico: ServicoService, private router: Router) { }

  ngOnInit() {
  }

  Login(){
    this.mensagem = '';
    this.servico.getsenha().subscribe(senha => {
      if( this.usuario === 'zanette' && this.senha === senha[0].senha){
        sessionStorage.setItem('autenticado', 'sim');
        //this.servico.autenticado = true;
        this.router.navigate(['/listar']);
      } else {
        sessionStorage.setItem('autenticado', 'nao');
        this.mensagem = "Usuário ou senha inválido";
      }
    });
  }
}

