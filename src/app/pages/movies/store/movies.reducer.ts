import { ActionReducerMap } from "@ngrx/store";
import { moviesReducer } from './reducers/movies.reducer'

export interface movieState{

}

export const moviesReducers: ActionReducerMap<movieState> = {
  movies: moviesReducer
}
