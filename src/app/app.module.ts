import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng5SliderModule } from 'ng5-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserManagementComponentComponent } from './user-management-component/user-management-component.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { TaskComponentComponent } from './task-component/task-component.component';
import { ViewTaskComponentComponent } from './view-task-component/view-task-component.component';

@NgModule({
  declarations: [
    AppComponent,    
    UserManagementComponentComponent, ProjectComponentComponent, TaskComponentComponent, ViewTaskComponentComponent
   /* ,TaskManagerComponentComponent,
    TaskViewComponentComponent,
    ProjectManagementComponentComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
