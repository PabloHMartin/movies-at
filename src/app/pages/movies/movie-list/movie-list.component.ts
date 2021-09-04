import { AppState } from 'src/app/store/app.reducers';
import { AppStateWithMovies, MoviesState } from './../store/reducers/movies.reducer';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { Store } from '@ngrx/store';
import * as moviesActions from '../store/actions/index';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  loading: boolean = false;

  constructor(public store: Store<AppStateWithMovies>) { }

  ngOnInit(): void {

    this.store.select('movies').subscribe( (data) => {
      this.movies = data.movies;
      this.loading = data.loading;
    })

    this.store.dispatch( moviesActions.loadMovies() )
  }

}
