import { MovieListModule } from './movie-list/movie-list.module';
import { MovieSingleComponent } from './movie-single/movie-single.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSingleModule } from './movie-single/movie-single.module';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent},
  { path: 'movies/:id', component: MovieSingleComponent},
  { path: '', redirectTo: '/movies',  pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MovieListModule,
    MovieSingleModule
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
