import { Component, OnInit } from '@angular/core';
import { Film } from '../../types/Film';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[];

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(films => {
      this.films = films;
    });
  }

  deleteFilm(film: Film): void {
    //remove film from server
    this.filmService.deleteFilm(film).subscribe(removedFilm => {
    //remove film from client
    this.films = this.films.filter(f => f.id !== film.id);
    });
  }

  addFilm(film: Film): void {
    //console.log("addFilm films.component " + film.title);
    this.filmService.addFilm(film).subscribe(insertedFilm => {
      const filmToAdd: Film = {
        ...film, 
        id: insertedFilm.id
      }
      this.films.push(filmToAdd);
    });
  }
}