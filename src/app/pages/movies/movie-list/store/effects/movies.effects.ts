import * as FromActions  from './../actions/movies.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DbService } from '../../../services/db.service';
import { loadMovies } from './../actions/movies.actions';

@Injectable()
export class moviesEffects {

    constructor(
      private actions$: Actions,
      private db: DbService
    ){}

    loadMovies$ = createEffect(
      () => this.actions$.pipe(
        tap(data => console.log('data', data)),
        ofType( loadMovies ),
        mergeMap(
          () => this.db.getMovies()
          .pipe(
            tap(data => console.info('effect loadMovies data', data)),
            map( movies => FromActions.loadMoviesSuccess({movies: movies}) ),
            catchError(payload => of(FromActions.loadMoviesError({ payload })))
          )
        )
      )
    );

}
