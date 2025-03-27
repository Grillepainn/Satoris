import { Component } from '@angular/core';
import { UserCardComponent } from './components/user-card/user-card.component';

@Component({
  selector: 'app-root',
  imports: [UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-card';
}
