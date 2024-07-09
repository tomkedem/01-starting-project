import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-task',
  standalone: true,
  imports: [],
  templateUrl: './app-task.component.html',
  styleUrl: './app-task.component.css'
})
export class AppTaskComponent {
  @Input({required: true}) name?: string;

}
