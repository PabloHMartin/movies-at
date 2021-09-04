import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsArray } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { moviesReducer } from './store/reducers';

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    StoreModule.forFeature('movies', moviesReducer ),
    EffectsModule.forFeature(EffectsArray)
  ]
})
export class MoviesModule { }
