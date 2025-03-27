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
  user!:User;
  userList: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getRandomUser().subscribe((user: User) => {
      this.user = user;
    });

    this.userService.getListofRandomUsers(5).subscribe((userList: User[]) => {
      this.userList = userList;
    });
  }

}
