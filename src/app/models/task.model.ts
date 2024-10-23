/**
 * Task model contains all information about a task.
 */
import {Task} from "zone.js/lib/zone-impl";

export class TaskModel{

  taskName: string;
  taskPriority: number;
  subTasks: [];
  editMode: boolean;

  constructor(taskName: string, taskPriority: number, subTasks: [] ) {

    this.taskName = taskName;
    this.taskPriority = taskPriority;
    this.subTasks = subTasks;
    this.editMode = true; //this would be problematic if we worked with a db
    }

  }
