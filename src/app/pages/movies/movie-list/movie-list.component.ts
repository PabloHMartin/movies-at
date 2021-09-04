import { AppState } from 'src/app/store/app.reducers';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { Store } from '@ngrx/store';
import * as moviesActions from '../store/actions/index';
import { map, tap } from 'rxjs/operators';
import { AppStateWithMovies } from '../store/movies.reducer';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  loading: boolean = false;

  constructor(private store: Store<AppStateWithMovies>) { }

  ngOnInit(): void {

    this.store.select('movieList')
    .pipe(
      tap( data => console.log('tap', data))
    ).subscribe( (data) => {
      console.log('data', data);

     // this.movies = data;
      //this.loading = data;
    })

    this.store.dispatch( moviesActions.loadMovies() )
  }

}
