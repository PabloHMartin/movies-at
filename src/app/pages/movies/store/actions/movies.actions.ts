import { Movie } from 'src/app/shared/models/movie.model';
import { createAction, props } from "@ngrx/store";

export const loadMovies = createAction(
  '[Movies] Load Movies'
);

export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{movies: Movie[]}>()
);

export const loadMoviesError = createAction(
  '[Movies] Load Movies Error',
  props<{payload: any}>()
);
