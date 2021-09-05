import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MoviesRoutingModule,
  ]
})
export class MoviesModule { }
