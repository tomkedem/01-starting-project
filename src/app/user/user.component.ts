import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomUser = signal(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selecterdUser = randomUser;
  imagePath = computed(() => `assets/users/${this.selecterdUser().avatar}`);

 

  onSelectedUser() {
    const randomUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
    this.selecterdUser.set(randomUser);    
  }
}
