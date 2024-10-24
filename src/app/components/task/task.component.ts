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
  BGColor: string = "bg-yellow";
  taskNameColor: string = "task-name-yellow";

  constructor() {
  }

  ngOnChanges() {
    // ngOnChanges is triggered when @Input properties change or are set. --> If this stuff is in the constructor it will load before the inputs are processed and everything will return undefined.

    this.task = new TaskModel(this.inputTask.taskName, this.inputTask.taskPriority, this.inputTask.subTasks, this.inputTask.editMode, this.inputTask.taskId)
    this.setBGColor();
  }

  /**
   * Sets editMode to false if user is finished editing a task.
   * Calls this.safeToTaskService().
   */
  confirmChanges():void {
    this.task.editMode = false;
    this.safeToTaskService(); //this would make more sense if we were to safe to a Database. Right now we're just saving to the array in taskService and then loading from it again... Kind of pointless, but makes some sense from a conceptual point of view.
  }

  /**
   * Is called if a task is to be deleted.
   * Emits an Event to board.component.
   * The deletion is further handled by the board.
   */
  deleteTask(): void {
    this.deleteTaskEvent.emit(this.task);
  }

  /**
   * Adds a new subtask by pushing it to the subTasks-array.
   * The new subtask is outfitted with default values.
   */
  addNewSubtask(): void {
    this.task.subTasks.push(new SubTaskModel("neue Aufgabe", false))
  }

  /**
   * Safes the task to taskService.
   * Is called if a change is registered in one of the inputs of the task or its subtasks.
   * Is called by this.confirmChanges().
   * Is called if a subtask registers a change on its checkbox.
   *
   * Calls this.checkIfCompleted() and this.setBGColor.
   */
  safeToTaskService(): void {
    this.task.checkIfCompleted(); //method of task.model.ts. It might be better to move the check to task.component.ts
    this.setBGColor();
    this.updateTaskEvent.emit(this.task) //Reminder: check if subtasks are updated!
  }

  /**
   * Decides which class to use for background color depending on whether the task is completed or not.
   * Uses one-way-binding to insert the correct class name in task.component.html.
   */
  setBGColor():void {
    if (this.task.taskCompleted){
      this.BGColor = "bg-green";
      this.taskNameColor = "task-name-green"
    } else {
      this.BGColor = "bg-yellow";
      this.taskNameColor = "task-name-yellow"
    }
  }
}
