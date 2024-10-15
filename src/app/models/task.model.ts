/**
 * Task model contains all information about a task.
 */
import {Task} from "zone.js/lib/zone-impl";

export class TaskModel{

  taskName: string;
  taskPriority: number;
  subTasks: [];

  constructor(taskName: string, taskPriority: number, subTasks: [] ) {

    this.taskName = taskName;
    this.taskPriority = taskPriority;
    this.subTasks = subTasks;
    }

  }
