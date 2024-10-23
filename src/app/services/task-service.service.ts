/**
 * Task service keeps track of all tasks and supplies them to the board component.
 * This does NOT act as a centralized db. There are several instances floating around. I tend to forget about that...
 *
 *
 * Problems:
 * -Deletion of a Task leads to all Tasks being reloaded from task-service.ts. This leads to weird behavior,
 * because changes in tasks are only saved locally. The behavior is weird, because some changes still seem to
 * persist. I am somewhat confused --> will fix on thursday
 */
import {TaskModel} from "../models/task.model";


export class TaskServiceService {

  tasks: TaskModel[] = [];

  constructor( ) {

    //Only for Testing; will be removed.
    this.tasks.push(new TaskModel("1",1,[]));
    this.tasks.push(new TaskModel("2",1,[]));
    this.tasks.push(new TaskModel("3",1,[]));


  }

  addTask(task: TaskModel): void {
    this.tasks.push(task);
  }

  deleteTask(task: TaskModel): void {
    let index: number = this.tasks.indexOf(task) //This works; I don't understand the details of it yet, it might fail in unexpected ways.
    this.tasks.splice(index, 1)
  }

  /**
   * Returns the array containing all tasks.
   */
  getAllTasks(): TaskModel[] {
    return this.tasks;
  }

}
