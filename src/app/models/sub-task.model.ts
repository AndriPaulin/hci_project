/**
 * Subtask model contains all information about a task.
 */

export class SubTaskModel{

  taskName: string;
  subTaskCompleted: boolean;

  constructor(taskName: string ) {

    this.taskName = taskName;
    this.subTaskCompleted = false;

  }

  /**
   * Called by sub-task.component if a sub-task has been completed.
   */
  completeTask(): void {
    this.subTaskCompleted = true;
  }

}
