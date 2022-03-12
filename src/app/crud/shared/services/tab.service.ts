import { Injectable } from '@angular/core';
import { TodoFormGroup } from '../form-group/todo.form-group';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TabService {
  public currentTab: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public todoForm: TodoFormGroup = new TodoFormGroup();

  constructor() {
  }

  public clearTodoForm(): void {
    this.todoForm.reset();
  }

  public setCurrentTab(numberTab: number): void {
    this.currentTab.next(numberTab);
  }
}
