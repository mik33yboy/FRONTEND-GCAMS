import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { INavigationItem } from './navigation/navigation';
import { INavBarComponent } from './nav-bar/nav-bar.component';
import { INavLeftComponent } from './nav-bar/nav-left/nav-left.component';
import { INavRightComponent } from './nav-bar/nav-right/nav-right.component';
import { INavigationComponent } from './navigation/navigation.component';
import { INavLogoComponent } from './nav-bar/nav-logo/nav-logo.component';
import { INavContentComponent } from './navigation/nav-content/nav-content.component';
import { INavGroupComponent } from './navigation/nav-content/nav-group/nav-group.component';
import { INavCollapseComponent } from './navigation/nav-content/nav-collapse/nav-collapse.component';
import { INavItemComponent } from './navigation/nav-content/nav-item/nav-item.component';
import { ISharedModule } from './shared/shared.module';
import { InstructorComponent } from './instructor.component';
import { RegistrarRoutingModule } from './instructor-routing.module';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NewattendanceComponent } from './newattendance/newattendance.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { ManualnewattendanceComponent } from './manualnewattendance/manualnewattendance.component';

@NgModule({
  declarations: [
    INavBarComponent,
    INavLeftComponent,
    INavRightComponent,
    INavigationComponent,
    INavLogoComponent,
    INavContentComponent,
    INavGroupComponent,
    INavItemComponent,
    INavCollapseComponent,
    InstructorComponent,
    NewattendanceComponent,
    StudentprofileComponent,
    ManualnewattendanceComponent,
  ],
  imports: [BrowserModule, ISharedModule, BrowserAnimationsModule, RegistrarRoutingModule, CanvasJSAngularChartsModule],
  providers: [INavigationItem,],
  bootstrap: []
})
export class InstructorModule {}
