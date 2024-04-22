// Angular imports
import { Component, NgZone } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

// Project imports
import { BerryConfig } from '../app-config';

@Component({
  selector: 'app-registrar',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  berryConfig: any;
  navCollapsed: boolean;
  navCollapsedMob = false;
  windowWidth: number;

  constructor(
    private zone: NgZone,
    private location: Location,
    private locationStrategy: LocationStrategy
  ) {
    this.berryConfig = BerryConfig;
    this.setNavCollapseState();
    this.windowWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      this.zone.run(() => {
        this.windowWidth = window.innerWidth;
        this.setNavCollapseState();
      });
    });
  }

  setNavCollapseState() {
    const currentUrl = this.getCurrentUrl();
    const baseHref = this.locationStrategy.getBaseHref();

    if (baseHref && (currentUrl === `${baseHref}/layout/theme-compact` || currentUrl === `${baseHref}/layout/box`)) {
      this.berryConfig.isCollapse_menu = true;
    }

    this.navCollapsed = this.windowWidth >= 1025 ? BerryConfig.isCollapse_menu : false;
  }

  getCurrentUrl(): string {
    let currentUrl = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();

    if (baseHref) {
      currentUrl = baseHref + currentUrl;
    }

    return currentUrl;
  }

  navMobClick() {
    const navigationElement = document.querySelector('app-navigation.coded-navbar');
    
    if (navigationElement) {
      if (this.navCollapsedMob && !navigationElement.classList.contains('mob-open')) {
        this.toggleNavCollapsedMob();
      } else {
        this.navCollapsedMob = !this.navCollapsedMob;
      }
    }
  }

  toggleNavCollapsedMob() {
    this.navCollapsedMob = !this.navCollapsedMob;
    setTimeout(() => {
      this.navCollapsedMob = !this.navCollapsedMob;
    }, 100);
  }
}
