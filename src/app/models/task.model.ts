/**
 * Task model contains all information about a task.
 */
import {SubTaskModel} from "./sub-task.model";

export class TaskModel{

  taskName: string;
  taskPriority: number;
  subTasks: SubTaskModel[];
  editMode: boolean;

  constructor(taskName: string, taskPriority: number, subTasks: SubTaskModel[] ) {

    this.taskName = taskName;
    this.taskPriority = taskPriority;
    this.subTasks = subTasks;
    this.editMode = true; //this would be problematic if we worked with a db
    }

  }
