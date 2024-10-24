import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Input() inputTask: TaskModel = new TaskModel("", 0, [],false, 0);

  @Output() deleteTaskEvent: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() updateTaskEvent: EventEmitter<TaskModel> = new EventEmitter<TaskModel>()


  task: TaskModel = new TaskModel("", 0, [], false,0);

  constructor() {
  }

  ngOnChanges() {
    // ngOnChanges is triggered when @Input properties change or are set. --> If this stuff is in the constructor it will load before the inputs are processed and everything will return undefined.

    this.task = new TaskModel(this.inputTask.taskName, this.inputTask.taskPriority, this.inputTask.subTasks, this.inputTask.editMode, this.inputTask.taskId)
  }

  /**
   * Sets editMode to false if user is finished editing a task.
   * This only works locally and does not notify task-service of the change; This functionality might need to be added.
   */
  confirmChanges():void {
    this.task.editMode = false;



    this.safeToTaskService(); //this would make more sense if we were to safe to a Database. Right now we're just saving to the array in taskService and then loading from it again... Kind of pointless, but makes some sense from a conceptual point of view.
  }

  /**
   *
   */
  deleteTask(): void {
    this.deleteTaskEvent.emit(this.task);
  }

  addNewSubtask(): void {
    this.task.subTasks.push(new SubTaskModel("neue Aufgabe", false))
  }

  safeToTaskService(): void {
    this.updateTaskEvent.emit(this.task) //Reminder: check if subtasks are updated!
  }
}
