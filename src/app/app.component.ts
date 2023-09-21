import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Guid } from "guid-typescript";
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  todos: Todo[] = [];
  title: string = "";

  public onSubmit(form: NgForm) {
    let todo = new Todo(Guid.create(), this.title, false);
    this.todos.push(todo);
    this.title = "";
    form.resetForm();
  }

  onComplete(id: Guid) {
    let todo = this.todos.filter(x => x.id === id)[0];
    todo.isComplete = true;
  }

  onDelete(id: Guid) {
    let todo = this.todos.filter(x => x.id === id)[0];
    let index = this.todos.indexOf(todo, 0);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
