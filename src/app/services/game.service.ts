import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  constructor(
    private http: HttpClient
  ) { }

  processGame(){
    this.http.get(environment.API_URL + '/game').subscribe(
      response => {
        console.log(response)
      }
    )
  }
}
