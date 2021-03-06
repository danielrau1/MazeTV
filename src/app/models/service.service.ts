import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show} from './show';
import {Episode} from './episode';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {




  constructor(private http: HttpClient) { }

  // (1.1) This function is used to fetch the JSON data containing the keywords transmitted
  getShows(u): Observable<Show[]> {
    return this.http.get<Show[]>('http://api.tvmaze.com/search/shows?q=' + u);
  }


  // (2) given a specific show id get that shows seasons JSON
  getSeasons(u) {
    return this.http.get('http://api.tvmaze.com/shows/' + u + '/seasons');
  }

  // (2.1.1) For a given show id fetch the JSON containing the episodes
  getEpisodes(u): Observable<Episode[]> {
    return this.http.get<Episode[]>('http://api.tvmaze.com/shows/' + u + '/episodes');
  }

  // (2.2.2) For a given season id fetch the JSON containing the episodes
  getSeasonEpisodes(u): Observable<Episode[]>{
    return this.http.get<Episode[]>('http://api.tvmaze.com/seasons/' + u + '/episodes');
  }

}
