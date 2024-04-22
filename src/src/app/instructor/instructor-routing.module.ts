import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { InstructorComponent } from './instructor.component';
import { RegDashboardComponent } from './dashboard/reg-dashboard.component';
import { ManageStudentsComponent } from './managestudent/managestudent.component';
import { InsManageClassComponent } from './manageclass/ins-manageclass.component';
import { NewattendanceComponent } from './newattendance/newattendance.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { ManualnewattendanceComponent } from './manualnewattendance/manualnewattendance.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'instructor',
    component: InstructorComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: RegDashboardComponent },
      { path: 'manageclass', component: InsManageClassComponent },
      { path: 'managestudent', component: ManageStudentsComponent },
      { path: 'newattendance', component: NewattendanceComponent},
      { path: 'manualnewattendance', component: ManualnewattendanceComponent},
      { path: 'studentprofile', component: StudentprofileComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RegistrarRoutingModule { }
