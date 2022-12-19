import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CookpitComponent } from './cookpit/cookpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { EntityComponent } from './demo-app/entity/entity.component';
import { HeroDetailsComponent } from './demo-app/hero-details/hero-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CookpitComponent,
    ServerElementComponent,
    EntityComponent,
    HeroDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
