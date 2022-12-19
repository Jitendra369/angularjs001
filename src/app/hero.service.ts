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

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Hero[] {
    return HEROES;
}

}
