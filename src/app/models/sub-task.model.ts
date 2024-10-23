/**
 * Subtask model contains all information about a task.
 */

export class SubTaskModel{

  subTaskName: string;
  subTaskCompleted: boolean;

  constructor(taskName: string ) {

    this.subTaskName = taskName;
    this.subTaskCompleted = false;

  }

  /**
   * Called by sub-task.component if a sub-task has been completed.
   */
  completeTask(): void {
    this.subTaskCompleted = true;
  }

}
