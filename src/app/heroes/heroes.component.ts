import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Windstorm';
  
  // constructor de la clase
  constructor() { }

  // constructor del componente, se usa para inicializarlo
  ngOnInit(): void {
  }

}
