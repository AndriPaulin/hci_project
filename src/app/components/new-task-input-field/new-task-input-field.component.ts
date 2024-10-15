import {Component, EventEmitter, Output} from '@angular/core';
import {TaskModel} from "../../models/task.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-task-input-field',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task-input-field.component.html',
  styleUrl: './new-task-input-field.component.css'
})
export class NewTaskInputFieldComponent {

  taskName: string;

  @Output() newTaskEvent = new EventEmitter<TaskModel>

  constructor() {
    this.taskName = "New Task";
  }

  submit():void {

    this.newTaskEvent.emit(new TaskModel(this.taskName, 1, []));

  }

  createNewSubtaskField(): void {

  }

}
