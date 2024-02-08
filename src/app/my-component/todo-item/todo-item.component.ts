import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: Todo = {} as Todo; // Set a default value
  @Input() i!: number; // Initialize with definite assignment assertion
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter<Todo>(); // Specify the type for EventEmitter
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter<Todo>(); 

  onClick(todo: Todo): void {
    console.log("OnClick has been triggered");
    this.todoDelete.emit(todo); // Emit the Todo object when the button is clicked
  }

  onCheckboxClick(todo: Todo): void { // Specify the type for the 'todo' parameter
    this.todoCheckbox.emit(todo);
  }
}
