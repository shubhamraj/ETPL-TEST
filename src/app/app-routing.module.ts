import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'add-emp', pathMatch: 'full'},
  { path: 'add-emp', component: EmployeeComponent },
  { path: 'emp-list', component: EmployeeListComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
