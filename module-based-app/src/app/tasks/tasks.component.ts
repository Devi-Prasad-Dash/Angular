import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  /*

  @Input({required:true}) name!: string;
  @Input() name?: string;
  @Input() name: string | undefined; 
  
  */

  constructor(private tasksService: TasksService) {}

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  addingNewTask = false;

  addNewTask() {
    this.addingNewTask = true;
  }

  closeNewTask() {
    this.addingNewTask = false;
  }

  /*

  onAddTask(taskData: NewTaskData) {
    this.tasksService.addTask(taskData, this.userId);
    this.addingNewTask = false;
  }

  onCompleteTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  */

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

}