import { DbService } from './../../services/db.service';
import * as moviesActions  from './../actions/movies.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class moviesEffects {

    constructor(
      private actions$: Actions,
      private db: DbService
    ){}

    loadMovies$ = createEffect(
      () => this.actions$.pipe(
        ofType( moviesActions.loadMovies ),
        mergeMap(
          () => this.db.getMovies()
          .pipe(
            tap(data => console.info('effect loadMovies data', data)),
            map( movies => moviesActions.loadMoviesSuccess({movies}) ),
            catchError(payload => of(moviesActions.loadMoviesError({ payload })))
          )
        )
      )
    );

}
