import { Component, computed, EventEmitter, Input, input , Output} from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePhat = computed(() => `assets/users/${this.avatar()}`);

  get imagePhat() {
    return `assets/users/${this.avatar}`;
  }

  onSelectedUser() {
    this.select.emit(this.id);
  }
}
