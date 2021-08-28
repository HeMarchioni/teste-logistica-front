import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import { ContainerListComponent } from './container-list/container-list.component';
import {ContainerInfoComponent} from './container-list/container-info/container-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ContainerCadastroComponent } from './container-list/container-cadastro/container-cadastro.component';
import { SucessoComponent } from './sucesso/sucesso.component';
import { NgxMaskModule,} from 'ngx-mask'




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContainerListComponent,
    ContainerInfoComponent,
    ContainerCadastroComponent,
    SucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   // -> importar dependencia para requisição
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(  // -> para habiliar rotas
      [
        {path: 'container', component: ContainerListComponent}, // -> for na Url Container (carrega o componente
        {path: 'container/cadastro', component: ContainerCadastroComponent},
        {path: 'container/info/:id', component: ContainerInfoComponent},      // -> rota para carregar container info e passar o id por url
        {path: 'sucesso', component: SucessoComponent},
        {path: '', redirectTo: 'container', pathMatch: 'full'},   // -> se for na url nao especificada manda para url container
      ]
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
