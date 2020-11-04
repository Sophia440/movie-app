import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmsComponent } from './components/films/films.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmItemComponent,
    FilmsComponent,
    NotFoundComponent,
    AddFilmComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
