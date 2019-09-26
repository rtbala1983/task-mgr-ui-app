import { ProjectComponentComponent } from './project-component/project-component.component';
import { TaskComponentComponent } from './task-component/task-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserManagementComponentComponent } from './user-management-component/user-management-component.component';
import { ViewTaskComponentComponent } from './view-task-component/view-task-component.component';

const routes: Routes = [{
  path: 'add-task', component: ViewTaskComponentComponent },
  { path: 'add-project', component: ProjectComponentComponent },
  { path: 'add-task/:id', component: ViewTaskComponentComponent },
  { path: '', component: TaskComponentComponent },
  { path: 'view-task', component: ProjectComponentComponent },
  { path: 'add-user', component: UserManagementComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
