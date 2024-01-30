import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add', component: AddTaskComponent },
  {path:'edit/:id', component:TaskEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
