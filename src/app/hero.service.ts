// Why services :-->
// Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data.
// They should focus on presenting data and delegate data access to a service.
//This tutorial creates a HeroService that all application classes can use to get heroes.
// Instead of creating that service with the
//  new keyword
//  use the dependency injection that Angular supports to inject it into the
//  HeroesComponent constructor. Services are a great way to share information
//  among classes that don't know each other. Create a MessageService next and inject it in these two places.

// @Injectable() services
// Notice that the new service imports the Angular Injectable symbol and annotates the
// class with the @Injectable() decorator.
// The @Injectable() decorator accepts a metadata object for the service,
// the same way the @Component() decorator did for your component classes.


import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import { HEROES } from "./mock.hero";
import { Observable, of } from 'rxjs'
import {MessageService} from "./services/message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // This is an example of a typical service-in-service scenario in which you inject
  // the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) { }

//   sync call, can halt the service
//   getHeroes() : Hero[] {
//     return HEROES;
// }

  // of(HEROES) returns an Observable<Hero[]> that emits a single value,
  // the array of mock heroes.
  getHeroes() : Observable<Hero[]>{
    const heroes = of(HEROES);
    //calling another services
    this.messageService.add('heroService : fetches Hero')
    return  heroes;
  }

  // Like getHeroes(), getHero() has an asynchronous signature. It returns a
  // mock hero as an Observable, using the RxJS of() function.

  getHero(id: number){
    const  hero = HEROES.find(h=> h.id ===id)!;
    this.messageService.add(`HeroService : fetch Hero id=${id}`);
    return of(hero);
  }



}
