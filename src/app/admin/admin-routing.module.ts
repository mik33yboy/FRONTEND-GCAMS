import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from './admin.component';
import { SysDashboardComponent } from './sys-dashboard/sys-dashboard.component';
import { SysManageInstructorComponent } from './manageinstructor/manageinstructor.component';
import { SysManageStudentsComponent } from './managestudent/managestudent.component'
import { RegisterComponent } from '../register/register.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resetpassword', component: ResetpasswordComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'admindashboard', pathMatch: 'full' },
      { path: 'admindashboard', component: SysDashboardComponent },
      { path: 'manageinstructor', component: SysManageInstructorComponent},
      { path: 'managestudents', component: SysManageStudentsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
