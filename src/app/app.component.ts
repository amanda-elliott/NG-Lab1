import { Component } from '@angular/core';
import { ToDoInterface } from './to-do-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG-Lab1';
  listItems: ToDoInterface[] = [
    {
      task: "Walk the dog.",
      completed: false
    },
    {
      task: "Go to the store.",
      completed: true
    },
    {
      task: "Get gas.",
      completed: false
    },
    {
      task: "Wash the car.",
      completed: false
    }
  ];
 

}

