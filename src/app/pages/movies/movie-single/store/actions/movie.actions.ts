import { Movie } from 'src/app/shared/models/movie.model';
import { createAction, props } from "@ngrx/store";

export const loadMovie = createAction(
  '[Movie] Load Movie',
  props<{ id: string;}>()
);

export const loadMovieSuccess = createAction(
  '[Movie] Load Movie Success',
  props<{movie: Movie}>()
);

export const loadMovieError = createAction(
  '[Movie] Load Movie Error',
  props<{payload: any}>()
);
