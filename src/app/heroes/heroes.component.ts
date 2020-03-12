import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  /* La siguiente linea se añade internamente por la declaración de parametros del constructor.
  private heroService: HeroService;
  */
  // constructor de la clase
  constructor(private heroService: HeroService) { }

  // constructor del componente, se usa para inicializarlo
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero; // Aquí la referencia de hero se asignará a selectedHero
  }

}
