import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IINavigationItem } from './navigation/navigation';
import { IINavBarComponent } from './nav-bar/nav-bar.component';
import { IINavLeftComponent } from './nav-bar/nav-left/nav-left.component';
import { IINavRightComponent } from './nav-bar/nav-right/nav-right.component';
import { IINavigationComponent } from './navigation/navigation.component';
import { IINavLogoComponent } from './nav-bar/nav-logo/nav-logo.component';
import { IINavContentComponent } from './navigation/nav-content/nav-content.component';
import { IINavGroupComponent } from './navigation/nav-content/nav-group/nav-group.component';
import { IINavCollapseComponent } from './navigation/nav-content/nav-collapse/nav-collapse.component';
import { IINavItemComponent } from './navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from '../../app/shared/shared.module';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student-routing.module';
import { ReasonComponent } from './reason/reason.component';

@NgModule({
  declarations: [
    IINavBarComponent,
    IINavLeftComponent,
    IINavRightComponent,
    IINavigationComponent,
    IINavLogoComponent,
    IINavContentComponent,
    IINavGroupComponent,
    IINavItemComponent,
    IINavCollapseComponent,
    StudentComponent,
    ReasonComponent,
  ],
  imports: [BrowserModule, SharedModule, BrowserAnimationsModule, StudentRoutingModule ],
  providers: [IINavigationItem,],
  bootstrap: []
})
export class StudentModule {}
