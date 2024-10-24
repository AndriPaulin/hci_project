/**
 * Subtask model contains all information about a task.
 */

export class SubTaskModel{

  subTaskName: string;
  subTaskCompleted: boolean;

  constructor(taskName: string, subtaskCompleted: boolean) {

    this.subTaskName = taskName;
    this.subTaskCompleted = subtaskCompleted;

  }

  /**
   * Called by sub-task.component if a sub-task has been completed.
   */
  completeTask(): void {
    this.subTaskCompleted = true;
  }

}
