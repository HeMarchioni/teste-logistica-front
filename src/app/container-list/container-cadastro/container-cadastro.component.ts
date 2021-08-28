import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ContainerService} from "../container.service";



@Component({
  templateUrl: './container-cadastro.component.html',
  styleUrls: ['./container-cadastro.component.css']
})
export class ContainerCadastroComponent implements OnInit {


  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
  }


  submitForm(form: NgForm) {
    console.log(form.value);
    this.containerService.postContainer(form.value);

  }





}
