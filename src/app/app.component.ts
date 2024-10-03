import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskComponent} from "./components/task/task.component";
import {BoardComponent} from "./components/main-components/board/board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_test_hci';



}


