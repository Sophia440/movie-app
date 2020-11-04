import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Film } from '../types/Film';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const films = [
      { id: 1, title: 'Titanic', year: 1997, picture: "src/assets/WALL-E_poster.png" },
      { id: 2, title: 'La La Land', year: 2016, picture: "src/assets/WALL-E_poster.png" },
      { id: 3, title: 'WALL-E', year: 2008, picture: "src/assets/WALL-E_poster.png" },
      { id: 4, title: 'The Breakfast Club', year: 1985, picture: "src/assets/WALL-E_poster.png" },
      { id: 5, title: 'Gladiator', year: 2000, picture: "src/assets/WALL-E_poster.png" },
    ];

    return {films};
  }

  genId(films: Film[]): number {
    return films.length > 0
    ? Math.max(...films.map(film => film.id)) + 1
    : 1;
  }
}
