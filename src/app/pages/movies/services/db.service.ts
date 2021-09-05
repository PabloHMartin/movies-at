import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../../shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  MOVIES_URI: string = 'http://localhost:3000/movies';
  ACTORS_URI: string = 'http://localhost:3000/actors';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.MOVIES_URI);
  }

  getMovie(id: string): Observable<Movie> {
    console.log('service', id);

    return this.http.get<Movie>(`${this.MOVIES_URI}/${id}`);
  }
}
