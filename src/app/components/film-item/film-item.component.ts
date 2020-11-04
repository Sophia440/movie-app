import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Film } from 'src/app/types/Film';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film;
  @Output() deleteFilmItem: EventEmitter<Film> = new EventEmitter();

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
  }

  onDelete(film: Film): void {
    console.log(`onDelete ${film.title}`);
    this.deleteFilmItem.emit(film);
  }

  onView(film: Film): void {
    console.log(`onView ${film.title}`);
  }

}
