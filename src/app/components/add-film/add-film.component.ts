import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Film } from 'src/app/types/Film';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  @Output() addFilmItem: EventEmitter<Partial<Film>> = new EventEmitter();

  title: string;
  year: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Submit " + this.title)
    const film: Partial<Film> = {
      title: this.title,
      year: this.year,
    }
    this.addFilmItem.emit(film);
  }

}
