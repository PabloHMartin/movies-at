import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { MoviesState } from './movies.reducer';

export const moviesFeatureKey = 'movies';


export interface MoviesModuleState {
  movies: MoviesState,
}


