import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule} from '@angular/material';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';
import {TaskRowComponent} from './components/task-row/task-row.component';
import {TaskContainerComponent} from './components/task-container/task-container.component';
import {TaskManager} from "./data-manager/task-manager";

@NgModule({
  declarations: [
    AppComponent,
    TaskRowComponent,
    TaskContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  providers: [
    TaskManager,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
