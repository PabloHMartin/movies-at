import { MovieSingleComponent } from './movie-single.component';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { movieReducer } from './store/reducers/movie.reducer';
import { EffectsArray } from './store/effects';
import * as fromMovie from './store/reducers/index'


@NgModule({
  declarations: [
    MovieSingleComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMovie.movieFeatureKey, movieReducer),
    EffectsModule.forRoot(EffectsArray),
    SharedModule
  ],
  exports: [
    MovieSingleComponent,
  ]
})
export class MovieSingleModule { }
