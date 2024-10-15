import {Component, Input} from '@angular/core';
import {TaskModel} from "../../models/task.model";
import {SubTaskModel} from "../../models/sub-task.model";
import {NgForOf} from "@angular/common";
import {SubTaskComponent} from "../sub-task/sub-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    NgForOf,
    SubTaskComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task: TaskModel | undefined;
  @Input() subTaskArray: SubTaskModel[] | undefined;

  taskName: string | undefined;
  constructor() {
  }

  ngOnChanges() {
    // ngOnChanges is triggered when @Input properties change or are set. --> If this stuff is in the constructor it will load before the inputs are processed and everything will return undefined.
    this.subTaskArray = this.task?.subTasks;
    this.taskName = this.task?.taskName;
    console.log(this.taskName);
  }
}
