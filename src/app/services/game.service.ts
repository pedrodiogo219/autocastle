import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

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

  async processGame(fenPosition?: string): Promise<gameResponse>{
    const options: {
      params?: {
        [param: string]: string;
      };
    } = {}

    if (fenPosition)
      options['params'] = {position: fenPosition}

    const getRequest = this.http.get(environment.API_URL + '/game', options) as Observable<gameResponse>;
    return await firstValueFrom(getRequest); 
  }
}
