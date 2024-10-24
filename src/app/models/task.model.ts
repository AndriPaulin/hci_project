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

  constructor(taskName: string, taskPriority: number, subTasks: SubTaskModel[], editMode: boolean, taskId: number) {

    this.taskName = taskName;
    this.taskPriority = taskPriority;
    this.subTasks = subTasks;
    this.editMode = editMode;
    this.taskId = taskId;
    }

  }
