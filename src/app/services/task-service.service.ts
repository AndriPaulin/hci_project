/**
 * Task service keeps track of all tasks and supplies them to the board component.
 * This does NOT act as a centralized db. There are several instances floating around. I tend to forget about that...
 */
import {TaskModel} from "../models/task.model";


export class TaskServiceService {

  tasks: TaskModel[] = [];

  constructor( ) {

    this.tasks.push(new TaskModel("1",1,[]));
    this.tasks.push(new TaskModel("2",1,[]));
    this.tasks.push(new TaskModel("3",1,[]));


  }

  addTask(task: TaskModel): void {
    this.tasks.push(task);
  }

  deleteTask(task: TaskModel): void {
    let index: number = this.tasks.indexOf(task) //might not work
    console.log("Trying to delete index: " + index)
    this.tasks.splice(index, 1)
  }

  /**
   * Returns the array containing all tasks.
   */
  getAllTasks(): TaskModel[] {
    return this.tasks;
  }

}
