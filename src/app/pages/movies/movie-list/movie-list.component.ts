import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/shared/models/movie.model';
import { loadMovies } from './store/actions';
import { MoviesModuleState } from './store/reducers';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  loading: boolean = false;

  constructor(private store: Store<MoviesModuleState>) { }

  ngOnInit(): void {

    this.store.select('movies')
    .subscribe( data => {
      console.log('data-from-movielist', data.movies);

      this.movies = data.movies;
      this.loading = data.loading;
    })

    this.store.dispatch( loadMovies() )
  }

}
