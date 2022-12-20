import { Component, OnInit } from '@angular/core';
import {Hero} from "../../hero";
//getting the constant value form mock_hero.ts file
//rather than importing "HEROES" we get HEROES from "HeroService" Class
import { HEROES } from '../../mock.hero';
import {HeroService} from "../../hero.service";
import {MessageService} from "../../services/message.service";

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

  constructor(private heroServices: HeroService, private messageService : MessageService) { }

  //get all the array in local-variable
  // heroes =  HEROES;

  //get the HEROES from service class
  heroes : Hero[] =[];

  //get demo variable
  selectedHero ? : Hero;



  // getHeroes() :void{
  //   this.heroes = this.heroServices.getHeroes();
  // }

  // he previous version assigns an array of heroes to the component's heroes property. ' +
  // 'The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
  // When Angular creates a HeroesComponent, the Dependency Injection system sets
  // the heroService parameter to the singleton instance of HeroService.
  // he new version waits for the Observable to emit the array of heroes,
  // which could happen now or several minutes from now.
  // The subscribe() method passes the emitted array to the callback,
  // which sets the component's heroes property.
  // This asynchronous approach works when the HeroService requests heroes from the server.
  getHeroes() :void{
   this.heroServices.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit(): void {
    this.getHeroes();
  }



  //sending hero object, button click event
  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
    this.messageService.add(`HeroComponent : selected Hero id =&{ hero.id }`)
  }



}
