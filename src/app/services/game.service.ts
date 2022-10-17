import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface gameResponse{
  position: string,
  states: string[]
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  constructor(
    private http: HttpClient
  ) { }

  processGame(){
    return this.http.get(environment.API_URL + '/game') as Observable<gameResponse>
  }
}
