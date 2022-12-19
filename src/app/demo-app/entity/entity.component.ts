import { Component, OnInit } from '@angular/core';
import {Hero} from "../../hero";
//getting the constant value form mock_hero.ts file
//rather than importing "HEROES" we get HEROES from "HeroService" Class
import { HEROES } from '../../mock.hero';
import {HeroService} from "../../hero.service";

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  hero : Hero = {
    id :1,
  name :"jittu"
};

  //get all the array in local-variable
  // heroes =  HEROES;

  //get the HEROES from service class
  heroes : Hero[] =[];

  //get demo variable
  selectedHero ? : Hero;

  constructor(private heroServices: HeroService) { }

  getHeroes() :void{
    this.heroes = this.heroServices.getHeroes();
  }

  // When Angular creates a HeroesComponent, the Dependency Injection system sets
  // the heroService parameter to the singleton instance of HeroService.
  ngOnInit(): void {
    this.getHeroes();
  }

  //sending hero object
  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }


}
