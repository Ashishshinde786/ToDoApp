import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo'; // Make sure Todo class is imported correctly

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string = ''; // Initialize with an empty string
  desc: string = '';  // Initialize with an empty string
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter<Todo>();

  onSubmit() {
    const todo: Todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
    // Reset form fields after submission if needed
    this.title = '';
    this.desc = '';
  }
}
