import {Component, Input} from '@angular/core';
import {TaskModel} from "../../models/task.model";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task: TaskModel | undefined;

  taskName: string | undefined;
  constructor() {

  }

  ngOnChanges() {
    // ngOnChanges is triggered when @Input properties change or are set.
    this.taskName = this.task?.taskName;
    console.log(this.taskName);
  }
}
