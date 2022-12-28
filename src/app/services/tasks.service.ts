import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

enum tasksKeys {
  'completed' = 'COMPLETED_TASKS',
  'uncompleted' = 'UNCOMPLETED_TASKS',
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public uncompletedTasks: Task[] = [];
  public completedTasks: Task[] = [];

  private set uncompletedTaskStorage(tasks) {
    const tasksRaw = JSON.stringify(tasks);
    localStorage.setItem(tasksKeys.uncompleted, tasksRaw);
  }

  private set completedTaskStorage(tasks) {
    const tasksRaw = JSON.stringify(tasks);
    localStorage.setItem(tasksKeys.completed, tasksRaw);
  }

  constructor() {
    const uncompletedTasks = JSON.parse(localStorage.getItem(tasksKeys.uncompleted));
    const completedTasks = JSON.parse(localStorage.getItem(tasksKeys.completed));

    this.uncompletedTasks = uncompletedTasks ?? [];
    this.completedTasks = completedTasks ?? [];
  }

  public completeTask(index: number) {
    if (index >= this.uncompletedTasks.length) return;
    
    // Add to completed tasks
    this.completedTasks.push({ ...this.uncompletedTasks[index] });

    // Remove from uncompleted tasks
    this.uncompletedTasks.splice(index, 1);

    this.updateStorage('both');
  }

  public uncompleteTask(index: number) {
    if (index >= this.completedTasks.length) return;
    
    // Add to uncompleted tasks
    this.uncompletedTasks.push({ ...this.completedTasks[index] });

    // Remove from completed tasks
    this.completedTasks.splice(index, 1);

    this.updateStorage('both');
  }

  public createToDoTask(task: Task) {
    this.uncompletedTasks.push(task);

    this.updateStorage('uncompleted');
  }

  public removeCompletedTask(index: number) {
    if (index >= this.completedTasks.length) return;

    // Remove from completed tasks
    this.completedTasks.splice(index, 1);

    this.updateStorage('completed');
  }

  public removeUncompletedTask(index: number) {
    if (index >= this.uncompletedTasks.length) return;

    // Remove from uncompleted tasks
    this.uncompletedTasks.splice(index, 1);

    // Update storage
    this.updateStorage('uncompleted');
  }

  public resetList() {
    // Uncomplete all tasks
    this.uncompletedTasks.push(...this.completedTasks);

    // Remove completed tasks
    this.completedTasks = [];

    this.updateStorage('both');
  }

  private updateStorage(options: 'none' | 'completed' | 'uncompleted' | 'both') {
    switch (options) {
      case 'completed':
        this.completedTaskStorage = this.completedTasks;
        break;

      case 'uncompleted':
        this.uncompletedTaskStorage = this.uncompletedTasks;
        break;

      case 'both':
        this.completedTaskStorage = this.completedTasks;
        this.uncompletedTaskStorage = this.uncompletedTasks;
        break;
    }
  }

}
