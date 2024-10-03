/**
 * Task model contains all information about a task.
 */

export class TaskModel {

  taskName: string;
  taskPriority: number;
  subTasks: [];

  constructor(taskName: string, taskPriority: number, subTasks: [] ) {

    this.taskName = taskName;
    this.taskPriority = taskPriority;
    this.subTasks = subTasks;
    }

  }
