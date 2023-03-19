import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() id!: number;
  @Input() title!: string;
  @Input() isCompleted!: boolean;

  @Output() completed: EventEmitter<number> = new EventEmitter<number>();
  @Output() fireDelete: EventEmitter<number> = new EventEmitter<number>();


  markCompleted() {
    this.completed.emit(this.id);
  }

  deleteTodo() {
    this.fireDelete.emit(this.id);
  }
}
