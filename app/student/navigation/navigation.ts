import { Injectable } from '@angular/core';

export interface IINavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: IINavigation[];
}

export interface IINavigation extends IINavigationItem {
  children?: IINavigationItem[];
}
const IINavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboards',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'myclass',
        title: 'Overview',
        type: 'item',
        classes: 'nav-item',
        url: '/student/myclass',
        icon: 'ti ti-dashboard'
      },
    ]
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'login',
        title: 'Log Out',
        type: 'item',
        url: '/login',
        icon: 'ti ti-logout',
        breadcrumbs: false
      },
    ]
  }
];


@Injectable()
export class IINavigationItem {
  get() {
    return IINavigationItems;
  }
}

