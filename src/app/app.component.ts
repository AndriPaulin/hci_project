import {Component, EventEmitter, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskComponent} from "./components/task/task.component";
import {BoardComponent} from "./components/main-components/board/board.component";
import {HeaderComponent} from "./components/main-components/header/header.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, BoardComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_test_hci';

  createNewTaskEventSubject: Subject<void> = new Subject<void>();

  forwardCreateNewTaskEvent() {
    console.log("event forwarded");
    this.createNewTaskEventSubject.next();
  }
}


