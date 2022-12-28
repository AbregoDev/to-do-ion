import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  get anyCompletedTask(): boolean {
    return this.tasksService.completedTasks.length > 0;
  }
  get anyUncompletedTask(): boolean {
    return this.tasksService.uncompletedTasks.length > 0;
  }

  constructor(private tasksService: TasksService) { }

  resetList() {
    this.tasksService.resetList();
  }

}
