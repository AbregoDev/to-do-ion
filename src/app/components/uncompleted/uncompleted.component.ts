import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-uncompleted',
  templateUrl: './uncompleted.component.html',
  styleUrls: ['./uncompleted.component.scss'],
})
export class UncompletedComponent implements OnInit {

  uncompletedTasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.uncompletedTasks = this.tasksService.uncompletedTasks;
  }

  remove(index: number) {
    this.tasksService.removeUncompletedTask(index);
  }

  complete(index: number) {
    this.tasksService.completeTask(index);
  }

}
