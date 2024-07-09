import { Component, computed, Input, input , output} from '@angular/core';
import { IUser } from '../Interfaces/IUser';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {  
  
  select = output<string>();  
  user = input.required<IUser>();  

  imagePhat = computed(() => `assets/users/${this.user().avatar}`);
 
  onSelectedUser() {
    this.select.emit(this.user().id);
  }
}
