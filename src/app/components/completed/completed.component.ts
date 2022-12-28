import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {

  completedTasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.completedTasks = this.tasksService.completedTasks;
  }

  remove(index: number) {
    this.tasksService.removeCompletedTask(index);
  }

  uncomplete(index: number) {
    this.tasksService.uncompleteTask(index);
  }

}
