import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SubTaskModel} from "../../models/sub-task.model";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-sub-task',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './sub-task.component.html',
  styleUrl: './sub-task.component.css'
})
export class SubTaskComponent {
  @Input() editMode!: boolean | undefined;
  @Input() subTask!: SubTaskModel;

  @Output() checkboxChangeEvent: EventEmitter<void> = new EventEmitter<void>(); //informs task that the checkbox state has changed and a safe to taskService is required

  checkbox: boolean;

  constructor() {
    this.checkbox = false;
  }

  /**
   * Updates this.checkbox after the inputs are loaded. Constructor runs to early and would read the inputs as undefined.
   */
  ngOnChanges():void {
    this.checkbox = this.subTask.subTaskCompleted;
  }

  onCheckboxChange(): void {
    this.subTask.subTaskCompleted = this.checkbox;
    this.checkboxChangeEvent.emit();
  }




}
