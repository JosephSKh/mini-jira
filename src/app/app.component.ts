import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JiraService } from './jira.service';
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

  counter = 5;

  taskFormGroup!: FormGroup;
  

  constructor(
    private todoService: TodoService,
    private jiraService: JiraService,
  ) {
    this.taskFormGroup = new FormGroup({
      title: new FormControl('', [Validators.required])
    })
  }


  ngOnInit() {
    this.todoList = [
    ];
/////////////////////////
    this.jiraService.getMessage().subscribe(
      task => {
        this.todoList.push(task)
      }
    )
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
/////////////////////////
  addTask() {
    this.jiraService.sendMessage(this.taskFormGroup.value);
    this.taskFormGroup.get('title')?.setValue('');
  }

}
