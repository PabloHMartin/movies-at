import { MovieState } from './movie.reducer';
import { AppState } from 'src/app/store/app.reducers';
import { Movie } from 'src/app/shared/models/movie.model';
import { Action, createReducer, on, State } from '@ngrx/store';
import { loadMovies, loadMoviesSuccess, loadMoviesError } from '../actions';

export interface MoviesState {
     movies: Movie[],
     loaded: boolean,
     loading: boolean,
     error: any
};

const MoviesInitialState: MoviesState = {
    movies: [],
    loaded: false,
    loading: false,
    error: null
};

const _moviesReducer = createReducer(
  MoviesInitialState,
  on(
    loadMovies,
     (state) => ({...state, loading: true}),
  ),
  on(
    loadMoviesSuccess,
    (state, { movies }) => ({...state, loading: false, loaded: true, movies: [ ...movies ]}),
  ),
  on(
    loadMoviesError,
    (state, { payload }) => ({...state, loading: false, loaded: true, error: payload}),
  ),
);


export function moviesReducer(state: any, action: any) {
  return _moviesReducer(state, action);
}
