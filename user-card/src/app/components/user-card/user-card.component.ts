import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})

export class UserCardComponent {
  // Propriété représentant un utilisateur unique, à afficher dans la carte principale
  user!:User;// le point d'exclamation signifie qu'on l'initilise plus tard (TS)

  //Tableau de user
  userList: User[] = [];

  showDetails = false;

  // Injection du service UserService pour récupérer les données utilisateurs via HTTP
  constructor(private userService: UserService) {}

  //Méthode de cycle de vie Angular, appelée uniquement à l'initilisation d composant
  // (il existe également ngOnDestroy, ngOnChanges ... )
  ngOnInit(): void {
    // Appel du service pour récupérer un utilisateur aléatoire (pour la carte principale)
    this.userService.getRandomUser().subscribe((user: User) => {
      this.user = user;
    });

    // Appel du service pour récupérer une liste de 5 utilisateurs (les amis)
    this.userService.getListofRandomUsers(5).subscribe((userList: User[]) => {
      this.userList = userList;
    });
  }

  //Méthode appelée lors du clic sur le bouton pour afficher/masquer les détails
  toggleDetails(){
    this.showDetails =!this.showDetails
  }

}
