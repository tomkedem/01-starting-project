import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class AppTaskComponent {
  @Input({required: true}) name?: string;

  onAddTask() {
    console.log('Task added');
  }

}
