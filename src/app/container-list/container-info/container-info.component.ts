import {Component, Input, OnInit} from '@angular/core';
import {Container} from "../container.model";
import {ContainerService} from "../container.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: './container-info.component.html',
  styleUrls: ['./container-info.component.css']
})
export class ContainerInfoComponent implements OnInit {

  container: Container;

  constructor(private activatedRoute: ActivatedRoute,private http:HttpClient, private containerService: ContainerService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.getBYId(+this.activatedRoute.snapshot.paramMap.get('id'));

  }


  getBYId(id:number) {

    this.http.get<Container>('https://back-logistica.herokuapp.com/container/info/'+id).subscribe(   // -> 'http://localhost:8080/container/info/'
      data =>{
        this.container = data
      },error => {
        console.log(error.message)
      }
    )
  }

  saveEdit() {
    this.containerService.putContainer(this.container);
  }






}
