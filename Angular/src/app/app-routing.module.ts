import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListagemComponent } from './listagem/listagem.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { GerenciarComponent } from './gerenciar/gerenciar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'listar', component: ListagemComponent, canActivate: [AuthGuard] },
  { path: 'detalhe/:id', component: DetalheComponent, canActivate: [AuthGuard] },
  { path: 'atualizar', component: AtualizarComponent, canActivate: [AuthGuard] },
  { path: 'gerenciar', component: GerenciarComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
