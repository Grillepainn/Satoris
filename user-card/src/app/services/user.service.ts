import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url_api_user = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  /* Création d'une fonction afin de :
    1. Récupérer un user random
    2. Récupérer un eliste de users
  */

  getRandomUser(): Observable<any> {
    return this.http.get(this.url_api_user)
  }

  getListofRandomUsers(count: number = 10): Observable<any> {
    return this.http.get(`${this.url_api_user}?results=${count}`)
  }

}
