import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { StudentComponent } from './student.component';
import { MyClassComponent } from './myclass/myclass.component';
import { ReasonComponent } from './reason/reason.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      { path: '', redirectTo: 'myclass', pathMatch: 'full' },
      { path: 'myclass', component: MyClassComponent },
      { path: 'reason', component: ReasonComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
