import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {TaskServiceService} from "../../../services/task-service.service";
import {TaskComponent} from "../../task/task.component";
import {NgForOf, NgIf} from "@angular/common";
import {TaskModel} from "../../../models/task.model";
import {Observable, Subscription} from "rxjs";
import {SubTaskModel} from "../../../models/sub-task.model";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    TaskComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  private createNewTaskEventSubscription: Subscription | undefined;

  @Input() createNewTaskEvent: Observable<void> | undefined;


  showNewInputField: boolean = false; //legacy --> remove

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
   * Creates subscription to CreateNewTasksEvents. Events originate in the header.component and are forwarded by the app.component.
   *    If the subscription detects a change, this.newIpnut() is called. /////THIS WILL CHANGE//////
   */
  ngOnInit(){
    this.createNewTaskEventSubscription = this.createNewTaskEvent?.subscribe(() => this.createNewTask())
  }





  /**
   * Creates a new Task in edit-mode.
   *
   * Gets all tasks from taskService. Then calls this.sortTasks() to display the tasks.
   */
  createNewTask(){

    this.taskService.addTask();
    this.reloadTasks();
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

  /**
   * Deletes Task from tasks in task service; then reloads tasks.
   * @param task
   */
  deleteTask($event: TaskModel): void {
    this.taskService.deleteTask($event);
    this.reloadTasks();
  }


  updateTask($event: TaskModel): void {
    this.taskService.updateTask($event);
  }

  reloadTasks(): void {
    this.allTasks = this.taskService.getAllTasks();
    this.sortTasks(this.allTasks);
  }
}
