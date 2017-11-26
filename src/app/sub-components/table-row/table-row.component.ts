import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-table-row',
	templateUrl: './table-row.component.html',
	styleUrls: ['./table-row.component.css'],
})
export class TableRowComponent {

	public subTasks = [];
	public isEnabled = true;
	public isMainTask = true;
	public taskTypes = [
		{ value: 'Dev', viewValue: 'Dev' },
		{ value: 'UI', viewValue: 'UI' },
		{ value: 'QA', viewValue: 'QA' },
	];

	public subProducts = [
		{ value: 'MTPlus', viewValue: 'MTPlus' },
		{ value: 'Rubix', viewValue: 'Rubix' },
		{ value: 'GTN', viewValue: 'GTN' },
	];

	public members = [
		{ value: 'Malinda', viewValue: 'Malinda' },
		{ value: 'Chandana', viewValue: 'Chandana' },
		{ value: 'Mihil', viewValue: 'Mihil' },
	];
	public statusTypes = [
		{ value: 'Not Yet Started', viewValue: 'Not Yet Started' },
		{ value: 'Inprogress', viewValue: 'Inprogress' },
		{ value: 'Completed', viewValue: 'Completed' },
	];

	public removeTask(): void {
		this.isEnabled = false;
	}

	public removeSubTask(subTask: Object): void {
		subTask['isEnabled'] = false;
	}

	public addSubTask(): void {
		this.subTasks.push({
			jiraId: 1112,
			taskType: 'Dev',
			subProduct: 'MTPlus',
			owner: 'Chandana',
			isEnabled: true,
		});
	}

	// public ngOnInit(): void {

	// }
}
