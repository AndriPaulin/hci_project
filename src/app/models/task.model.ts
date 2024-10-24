/**
 * Task model contains all information about a task.
 */
import {SubTaskModel} from "./sub-task.model";

export class TaskModel{

  taskName: string;
  taskPriority: number;
  subTasks: SubTaskModel[];
  editMode: boolean;
  taskId: number;
  taskCompleted: boolean;

  constructor(taskName: string, taskPriority: number, subTasks: SubTaskModel[], editMode: boolean, taskId: number) {

    this.taskName = taskName;
    this.taskPriority = taskPriority;
    this.subTasks = subTasks;
    this.editMode = editMode;
    this.taskId = taskId;

    this.taskCompleted = false;

    this.checkIfCompleted();
    }

  /**
   * Checks if the task is completed.
   * Might be better to move this to task.component.ts
   */
  checkIfCompleted(){
      for (let subtask of this.subTasks){
        if (!subtask.subTaskCompleted){
          this.taskCompleted = false;
          break;
        }
        this.taskCompleted = true;
      }
    }

  }
