import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage {

  taskName: string;
  taskHour: string;

  constructor(
    private alertController: AlertController,
    private tasksService: TasksService,
    private router: Router,
  ) { }

  async createTask() {
    if (!this.taskName) {
      const alert = await this.alertController.create({
        header: 'Can\'t create task',
        message: 'The task name can\'t be empty',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }

    this.tasksService.createToDoTask({ name: this.taskName, hour: this.taskHour });
    this.router.navigateByUrl('/list');
  }

}
