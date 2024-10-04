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

  /**
   * This does not work because there are several instances of task-service.service floating around.
   * If you want to use task-service.service as a sort of db crutch, you should do it properly.
   * It would probably be better to save tasks to some sort of csv or whatever.
   */
  submit():void {

    this.newTaskEvent.emit(new TaskModel(this.taskName, 1, []));

  }


}
