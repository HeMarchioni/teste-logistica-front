import {Component, OnInit} from '@angular/core';
import {ContainerService} from "./container.service";
import {Container} from "./container.model";
import {HttpClient} from "@angular/common/http";



@Component({
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.css']
})
export class ContainerListComponent implements OnInit {



  containerLista: Container[];    // -> criando variavel que contem a lista dos containers

  filtroListaContainer: Container[];  // -> Lista para filtro


  private _filtroBy:String;  // -> variavel que ira filtrar e esta conectada com o html

  constructor(private http:HttpClient,private containerService: ContainerService) { }

   ngOnInit() {

    this.containerService.getAll().subscribe(data =>{
      this.containerLista = data;
      this.filtroListaContainer = data;
      console.log(this.containerLista)
    },error => {
      console.log(error.message)
    })

  }



   deleteConteiner(id: number) {
      this.containerService.deleteContainer(id);
  }



  get filtroBy(): String {
    return this._filtroBy;
  }

  set filtroBy(value: String) {
    this._filtroBy = value;

    this.filtroListaContainer = this.containerLista.filter((container : Container) => (container.cd_Container.toLocaleLowerCase()
      .indexOf(this._filtroBy.toLocaleLowerCase()) > -1 || container.nm_Cliente.toLocaleLowerCase().indexOf(this._filtroBy.toLocaleLowerCase()) > -1 ))
  }
}


