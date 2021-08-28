import {Injectable} from "@angular/core";
import {Container} from "./container.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({                   // -> injetando courseService na raiz para ser chamado onde quiser
  providedIn: 'root'
})

export class ContainerService {




  constructor(private http:HttpClient,private router:Router) {    //-> implementar os metodos http para requisição
  }



 getAll(){
    return  this.http.get<any>('https://back-logistica.herokuapp.com/container'); // -> http://localhost:8080/container
  }




  deleteContainer(id:number) {

    this.http.delete('https://back-logistica.herokuapp.com/container/'+id).subscribe(  // -> http://localhost:8080/container/
      data =>{
        console.log(data)
       this.router.navigate(["/sucesso"])
      },error => {
        console.log(error.message)
      }
    )

  }


  putContainer(container:Container) {

    this.http.put<Container>('https://back-logistica.herokuapp.com/container',container).subscribe(   //-> http://localhost:8080/container'
      data =>{
        console.log(data)
        this.router.navigate(["/container"])
      },error => {
        console.log(error.message)
      }
    )

  }



  postContainer(container:Container){

    this.http.post<Container>('https://back-logistica.herokuapp.com/container',container).subscribe(   //> http://localhost:8080/container
      data =>{
        this.router.navigate(["/container"])
      },error => {
        console.log(error)
        if (error.status === 500) {
          alert("Numero do Container Já existente")
        }
      }
    )
  }

}

