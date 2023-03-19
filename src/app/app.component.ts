import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  todoList: any[] = [];
  title!: string;
  username!: string;
  

  constructor(
    private todoService: TodoService,
  ) {
  }


  ngOnInit() {
    this.todoList = [
      {id: 1, title: 'My first task'},
      {id: 2, title: 'My second task'},
      {id: 3, title: 'My third task'},
      {id: 4, title: 'My forth task'},
    ]
  }

  handleCompleted(id: any) {
    let todo = this.todoList.find((item: any) => {
      return item.id === id;
    });
    todo.completed = true;
  }

  handleDelete(id: any) {
    this.todoList = this.todoList.filter((todo: any) => id !== todo.id);
  }

}
