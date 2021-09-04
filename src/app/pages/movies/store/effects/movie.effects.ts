import { DbService } from './../../services/db.service';
import * as moviesActions  from './../actions/index';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class movieEffects {

    constructor(
      private actions$: Actions,
      private db: DbService
    ){}

    loadMovie$ = createEffect(
      () => this.actions$.pipe(
        ofType( moviesActions.loadMovie ),
        mergeMap(
          (action) => {
            console.log('effect loadMovie',action)

            return this.db.getMovie('2')
              .pipe(
                tap(data => console.info('effect loadMovie data', data)),
                map( movie => moviesActions.loadMovieSuccess({movie}) ),
                catchError(payload => of(moviesActions.loadMoviesError({ payload })))
              )
          }
        )
      )
    );

}
