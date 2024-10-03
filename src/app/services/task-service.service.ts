/**
 * Task service keeps track of all tasks and supplies them to the board component.
 * This does NOT act as a centralized db. There are several instances floating around.
 */
import {TaskModel} from "../models/task.model";


export class TaskServiceService {

  tasks: TaskModel[] = [];

  constructor( ) {


  }

  addTask(task: TaskModel): void {

    this.tasks.push(task);
  }

  /**
   * Returns the array containing all tasks.
   */
  getAllTasks(): TaskModel[] {
    return this.tasks;
  }

}
