import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() createNewTaskEvent: EventEmitter<Event> = new EventEmitter<Event>(); //not sure if 'Event' is the proper type


  createNewTask():void{

    this.createNewTaskEvent.emit();

  }



}
