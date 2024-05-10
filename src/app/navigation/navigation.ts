import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboards',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'sysdashboard',
        title: 'Administrator Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/admindashboard', // Updated URL to match the route path
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'manageinstructor',
        title: 'Instructors',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/manageinstructor', // Updated URL to match the route path
        icon: 'ti ti-user',
      },
      {
        id: 'managestudents',
        title: 'Students',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/managestudents', // Updated URL to match the route path
        icon: 'ti ti-user'
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
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}

