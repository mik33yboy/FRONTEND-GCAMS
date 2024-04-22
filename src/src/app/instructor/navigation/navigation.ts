import { Injectable } from '@angular/core';

export interface INavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: INavigation[];
}

export interface INavigation extends INavigationItem {
  children?: INavigationItem[];
}
const INavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboards',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Overview',
        type: 'item',
        classes: 'nav-item',
        url: '/instructor/dashboard', 
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'manageclass',
        title: 'Manage Class',
        type: 'item',
        classes: 'nav-item',
        url: '/instructor/manageclass',
        icon: 'ti ti-folder'
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
export class INavigationItem {
  get() {
    return INavigationItems;
  }
}

