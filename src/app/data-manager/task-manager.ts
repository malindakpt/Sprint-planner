import { Task } from '../entities/task';
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class TaskManager implements OnInit {

  public taskArr;

  constructor() {
    const t1 = new Task();
    const t2 = new Task();
    t1.jid = '123';
    t1.owner = 'Malinda';
    t1.remainingTime = '23';
    t1.status = 'completed';
    t1.subProduct = 'MTPlus';
    t1.taskType = 'Dev';

    t2.jid = '1223';
    t2.owner = 'Malinda2';
    t2.remainingTime = '23';
    t2.status = 'completed';
    t2.subProduct = 'Rubix';
    t2.taskType = 'Dev';

    this.taskArr = [t1, t2];
    console.log('Constructor');
  }

  public ngOnInit(): void {


    console.log('TM init');
  }

  public getAllTasks(): Array<Task> {


    return this.taskArr;
  }
}
