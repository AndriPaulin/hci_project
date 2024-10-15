import { Component } from '@angular/core';
import {TaskServiceService} from "../../../services/task-service.service";
import {TaskComponent} from "../../task/task.component";
import {NgForOf, NgIf} from "@angular/common";
import {NewTaskInputFieldComponent} from "../../new-task-input-field/new-task-input-field.component";
import {TaskModel} from "../../../models/task.model";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    TaskComponent,
    NgForOf,
    NewTaskInputFieldComponent,
    NgIf
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  showNewInputField: boolean = false;

  taskService: TaskServiceService = new TaskServiceService();

  allTasks: TaskModel[]; //Array containing all tasks. In our demo this serves as the 'central db'. It is not persistent in any way.

  tasksOne: TaskModel[] = [];
  tasksTwo: TaskModel[] = [];
  tasksThree: TaskModel[] = [];
  tasksFour: TaskModel[] = [];
  tasksFive: TaskModel[] = [];

  constructor() {
    this.allTasks = this.taskService.getAllTasks();
  }

  /**
   * Gets called by newTaskEvent from ?
   * @param task
   */
  addTask(task: TaskModel): void {

    this.taskService.addTask(task);
    this.showNewInputField = false;
    this.allTasks = this.taskService.getAllTasks();
    this.sortTasks(this.allTasks);
  }

  newInput(): void {

    this.showNewInputField = true;

  }

  /**
   * Sorts all Tasks to be displayed in five columns.
   * @param allTasks
   */
  sortTasks(allTasks: TaskModel[]):void {
    this.tasksOne = [];
    this.tasksTwo = [];
    this.tasksThree = [];
    this.tasksFour = [];
    this.tasksFive = [];

    let v = 0;
    for (let i: number = 0; i < allTasks.length; i++) {
      v++;
      switch (v){
        case v = 1: this.tasksOne.push(allTasks[i]);
          break;
        case v = 2: this.tasksTwo.push(allTasks[i]);
          break;
        case v = 3: this.tasksThree.push(allTasks[i]);
          break;
        case v = 4: this.tasksFour.push(allTasks[i]);
          break;
        case v = 5: this.tasksFive.push(allTasks[i]);
          v = 0;
          break;
      }
    }
  }

}
