import { ActionReducerMap } from "@ngrx/store";
import * as reducers from './reducers';
import { AppState } from "src/app/store/app.reducers";
export interface AppStateWithMovies extends AppState{
  movieList: reducers.MoviesState,
  movie: reducers.MovieState
}

export const moviesReducers: ActionReducerMap<AppStateWithMovies> = {
  movieList: reducers.moviesReducer,
  movie: reducers.movieReducer
}
