import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsArray } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import * as reducers from './store/movies.reducer';
import { MovieSingleComponent } from './movie-single/movie-single.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieSingleComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    StoreModule.forFeature('movies', reducers.moviesReducers ),
    EffectsModule.forFeature(EffectsArray)
  ]
})
export class MoviesModule { }
