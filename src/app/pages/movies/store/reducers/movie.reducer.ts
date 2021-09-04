import { AppState } from 'src/app/store/app.reducers';
import { Movie } from 'src/app/shared/models/movie.model';
import { createReducer, on } from '@ngrx/store';
import { loadMovie, loadMovieError, loadMovieSuccess } from '../actions';

export interface MovieState {

  movie: Movie | null,
  loaded: boolean,
  loading: boolean,
  error: any
};

const MovieInitialState: MovieState = {
  movie: null,
  loaded: false,
  loading: false,
  error: null
};

const _movieReducer = createReducer(
  MovieInitialState,
  on(
    loadMovie,
     (state, {id}) => ({...state, loading: true, id: id}),
  ),
  on(
    loadMovieSuccess,
    (state, { movie }) => ({...state, loading: false, loaded: true, movie: {...movie}}),
  ),
  on(
    loadMovieError,
    (state, { payload }) => ({...state, loading: false, loaded: true, error: payload}),
  ),
);


export function movieReducer(state: any, action: any) {
  return _movieReducer(state, action);
}
