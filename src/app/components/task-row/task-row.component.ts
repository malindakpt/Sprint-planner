import {Component, Input, OnInit} from '@angular/core';
import { NgModel } from '@angular/forms';
import {Task} from '../../entities/task';

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.css']
})
export class TaskRowComponent implements OnInit {

  @Input() public task: Task;
  @Input() public name: string;
  public ngOnInit(): void {
  }

}
