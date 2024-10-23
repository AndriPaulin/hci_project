import {Component, Input} from '@angular/core';
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



}
