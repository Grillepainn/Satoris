import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../models/user.model';

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

    //Méthode pour récupérer un user aléatoire
  getRandomUser(): Observable<User> {
    // Effectue une requête http définis dans this.url_api_user
    return this.http.get<{ results: User[] }>(this.url_api_user).pipe(
      // Quand on reçoit la réponse, on utilise .map de la librairie rxjs
      map((response: { results: User[] }) =>
        // On extrait le premier user du tableau
        response.results[0])
    );
  }

  getListofRandomUsers(count: number = 10): Observable<User[]> {
    return this.http.get<{ results: User[] }>(`${this.url_api_user}?results=${count}`).pipe(
      map((response: { results: User[] }) => response.results)
    );
  }

}
