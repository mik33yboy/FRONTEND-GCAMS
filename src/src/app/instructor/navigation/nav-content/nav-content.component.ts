// Angular imports
import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

// Project imports
import { INavigationItem } from '../navigation';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class INavContentComponent implements OnInit {
  // Public props
  @Output() NavCollapsedMob: EventEmitter<any> = new EventEmitter();

  // Version
  currentApplicationVersion = environment.appVersion;

  navigation: any;
  windowWidth = window.innerWidth;
  currentTime: Observable<Date>;
  currentDate: Observable<Date>;

  // Constructor
  constructor(
    public nav: INavigationItem,
    private zone: NgZone,
    private location: Location,
    private locationStrategy: LocationStrategy
  ) {
    this.navigation = this.nav.get();
  }

  // Life cycle events
  ngOnInit() {
    if (this.windowWidth < 1025) {
      (document.querySelector('.coded-navbar') as HTMLDivElement).classList.add('menupos-static');
    }

    // Initialize current time and date
    this.currentTime = interval(1000).pipe(map(() => new Date()));
    this.currentDate = interval(1000).pipe(map(() => new Date()));
  }

  fireOutClick() {
    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const last_parent = up_parent?.parentElement;
      if (parent?.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger');
        parent.classList.add('active');
      } else if (up_parent?.classList.contains('coded-hasmenu')) {
        up_parent.classList.add('coded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('coded-hasmenu')) {
        last_parent.classList.add('coded-trigger');
        last_parent.classList.add('active');
      }
    }
  }

  navMob() {
    if (this.windowWidth < 1025 && document.querySelector('app-navigation.coded-navbar').classList.contains('mob-open')) {
      this.NavCollapsedMob.emit();
    }
  }
}
