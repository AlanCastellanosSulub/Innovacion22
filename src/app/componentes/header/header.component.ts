import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu: Array<{name:string, router:any}> = [
    {
      name: 'Servicios',
      router: []
    },
    {
      name: 'Galeria',
      router: []
    },
    {
      name: 'Proyectos',
      router: []
    },
    {
      name: 'Contactenos',
      router: []
    }
    ,
    {
      name: 'Login',
      router: ['/','login']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
