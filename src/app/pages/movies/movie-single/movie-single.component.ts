import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Movie } from 'src/app/shared/models/movie.model';
import { loadMovie } from './store/actions';
import { MovieModuleState } from './store/reducers';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {

  movie: Movie | null;

  constructor(private route: ActivatedRoute,
              private store: Store<MovieModuleState>
              ) { }

  ngOnInit(): void {

    this.store.select('movie').subscribe( (movie) =>{
      console.log('movie', movie.movie);
      this.movie = movie.movie;
    } )

    this.route.params.subscribe(({id}) => {
      this.store.dispatch( loadMovie({id: id}));
    })
  }

}
