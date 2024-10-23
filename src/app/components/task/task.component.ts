import {Component, Input} from '@angular/core';
import {TaskModel} from "../../models/task.model";
import {SubTaskModel} from "../../models/sub-task.model";
import {NgForOf, NgIf} from "@angular/common";
import {SubTaskComponent} from "../sub-task/sub-task.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    NgForOf,
    SubTaskComponent,
    NgIf,
    FormsModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task: TaskModel | undefined;
  @Input() subTaskArray: SubTaskModel[] | undefined;

  taskName: string | undefined;
  editMode: boolean | undefined;
  constructor() {
  }

  ngOnChanges() {
    // ngOnChanges is triggered when @Input properties change or are set. --> If this stuff is in the constructor it will load before the inputs are processed and everything will return undefined.
    this.subTaskArray = this.task?.subTasks;
    this.taskName = this.task?.taskName;
    this.editMode = this.task?.editMode;
    console.log(this.taskName);
  }

  /**
   * Sets editMode to false if user is finished editing a task.
   * This only works locally and does not notify task-service of the change; This functionality might need to be added.
   */
  confirmChanges():void {
    this.editMode = false;
  }

  /**
   * Not implemented. Will probably use an Event to notify board.component that the task is to be deleted.
   */
  deleteTask() {

  }
}
