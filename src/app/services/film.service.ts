import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../types/Film';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  filmsUrl: string = 'api/films';

  constructor(
    private http: HttpClient
  ) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(
      `${this.filmsUrl}`
    );
  }

  toggleCompleted(film: Film): Observable<Partial<Film>> {
    const url = `${this.filmsUrl}/${film.id}`;

    return this.http.put(
      url, film, httpOptions
    );
  }

  deleteFilm(film: Film): Observable<Film> {
    const url = `${this.filmsUrl}/${film.id}`;
    
    return this.http.delete<Film>(url, httpOptions);
  }

  addFilm(film: Partial<Film>): Observable<Film> {
    //console.log("addFilm films.service " + film.title);
    return this.http.post<Film>(
      this.filmsUrl, film, httpOptions
    );
  }

}
