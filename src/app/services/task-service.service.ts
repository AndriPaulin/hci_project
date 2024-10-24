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
import {IndexingContext} from "@angular/compiler-cli/src/ngtsc/indexer";
import {SubTaskModel} from "../models/sub-task.model";


export class TaskServiceService {

  tasks: TaskModel[] = [];
  taskIdCounter: number = 0 //first ID will be 1

  constructor( ) {


  }

  addTask(): void {
    this.taskIdCounter++;
    this.tasks.push(new TaskModel("Neue Liste " + this.taskIdCounter, 1, [new SubTaskModel("neue Aufgabe")], true, this.taskIdCounter));
  }

  /**
   * Deletes a Task from this.tasks.
   * Compares taskToBeDeleted to tasks in tasks (array), once the corresponding ID is fond,
   * the index of the task is determined and then used to splice the task from the array.
   * @param taskToBeDeleted
   */
  deleteTask(taskToBeDeleted: TaskModel): void {
    let index: number = 0; //will be overwritten once proper index is found

    for (let i = 0; i < this.tasks.length; i++){
      if (taskToBeDeleted.taskId == this.tasks[i].taskId){
        index = this.tasks.indexOf(this.tasks[i])
        break;
      }
    }

    this.tasks.splice(index, 1)
  }

  /**
   * Returns the array containing all tasks.
   */
  getAllTasks(): TaskModel[] {
    return this.tasks;
  }

  /**
   * Updates a Task by replacing with a task provided in the function.
   * @param updatedTask
   */
  updateTask(updatedTask: TaskModel): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (updatedTask.taskId == this.tasks[i].taskId) {
        this.tasks[i] = updatedTask;
        break;
      }
    }
  }

}
