import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-table-row',
	templateUrl: './table-row.component.html',
	styleUrls: ['./table-row.component.css'],
})
export class TableRowComponent {

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
	// public ngOnInit(): void {

	// }
}
