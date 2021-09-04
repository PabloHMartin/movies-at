import { loadMovie } from './../store/actions/movie.actions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppStateWithMovies } from '../store/movies.reducer';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public store: Store<AppStateWithMovies>) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      console.log('movie-single', id);

      this.store.dispatch( loadMovie(id));
    })
  }

}
