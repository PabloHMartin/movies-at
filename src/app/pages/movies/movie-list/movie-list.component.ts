import { DbService } from './../services/db.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(public db: DbService) { }

  ngOnInit(): void {
    this.db.getMovies().subscribe( movies => this.movies=movies);
  }

}
