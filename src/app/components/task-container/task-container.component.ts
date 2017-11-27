import { Component, OnInit } from '@angular/core';
import { Task } from '../../entities/task';
import { TaskManager } from '../../data-manager/task-manager';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent implements OnInit {

  public taskManager;
  constructor(private taskManager: TaskManager) { }

  ngOnInit() {
    console.log('getTaskList init');
  }

  public getTaskList(): Array<Task> {
    return this.taskManager.getAllTasks();
  }

}
