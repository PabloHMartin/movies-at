import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { MovieState } from './movie.reducer';

export const movieFeatureKey = 'movie';

export interface MovieModuleState {
  movie: MovieState
}

