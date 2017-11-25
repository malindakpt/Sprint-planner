import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableRowComponent } from './sub-components/table-row/table-row.component';

@NgModule({
	declarations: [
		AppComponent,
		TableRowComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatInputModule,
		MatCheckboxModule,
		MatSelectModule,
	],
	providers: [],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
