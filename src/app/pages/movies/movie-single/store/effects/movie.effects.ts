import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DbService } from '../../../services/db.service';
import * as FromActions from '../actions/index'

@Injectable()
export class movieEffects {

    constructor(
      private actions$: Actions,
      private db: DbService
    ){}

    loadMovie$ = createEffect(
      () => this.actions$.pipe(
        ofType( FromActions.loadMovie ),
        mergeMap(
          (action) => this.db.getMovie(action.id)
          .pipe(
            map( movie => FromActions.loadMovieSuccess({movie}) ),
            catchError(payload => of(FromActions.loadMovieError({ payload })))
          )
        )
      )
    );

}
