import { Component, computed, Input, input , output} from '@angular/core';

interface User {
  id:  string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {  
  
  select = output<string>();  
  user = input.required<User>();  

  imagePhat = computed(() => `assets/users/${this.user().avatar}`);
 
  onSelectedUser() {
    this.select.emit(this.user().id);
  }
}
