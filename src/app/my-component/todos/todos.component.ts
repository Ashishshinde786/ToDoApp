import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor() {
    // Retrieve todos from local storage or initialize an empty array
    const localItem = localStorage.getItem("todos");
    this.todos = localItem ? JSON.parse(localItem) : [];
  }

  deleteTodo(todo: Todo): void {
    console.log("Todo deleted:", todo);
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1); 
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  } 

  toggleTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos[index].active = !this.todos[index].active;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  addTodo(todo: Todo): void {
    console.log("Todo added:", todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
