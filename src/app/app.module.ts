import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NavigationItem } from './navigation/navigation';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { InstructorModule } from './instructor/instructor.module'
import { RegistrarRoutingModule } from './instructor/instructor-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLeftComponent } from './nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './nav-bar/nav-right/nav-right.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavLogoComponent } from './nav-bar/nav-logo/nav-logo.component';
import { NavContentComponent } from './navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './navigation/nav-content/nav-item/nav-item.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { StudentModule } from './student/student.module';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemComponent,
    NavCollapseComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, InstructorModule, StudentModule, StudentRoutingModule,  AdminRoutingModule, RegistrarRoutingModule, NgxPaginationModule],
  providers: [NavigationItem,],
  bootstrap: [AppComponent]
})
export class AppModule {}
