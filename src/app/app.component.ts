import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public title = 'app';
	public taskList = [
		{
			jiraId: 1111,
			taskType: 'UI',
			subProduct: 'MTPlus',
			owner: 'Malinda',
		},
		{
			jiraId: 1112,
			taskType: 'Dev',
			subProduct: 'MTPlus',
			owner: 'Chandana',
		},
	];

	public addNewTask(): void {
		this.taskList.push({
			jiraId: 1112,
			taskType: 'Dev',
			subProduct: 'MTPlus',
			owner: 'Chandana',
		});
	}
}
