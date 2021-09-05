import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieListComponent } from './movie-list.component';
import * as fromMovies from './store/reducers/index'
import { moviesReducer } from './store/reducers/movies.reducer';
import { EffectsArray } from './store/effects';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMovies.moviesFeatureKey, moviesReducer),
    EffectsModule.forFeature(EffectsArray),
    SharedModule
  ],
  exports: [
    MovieListComponent
  ]
})
export class MovieListModule { }
