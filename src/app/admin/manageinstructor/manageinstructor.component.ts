import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import axios from 'axios';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './manageinstructor.component.html',
  styleUrls: ['./manageinstructor.component.scss']
})
export class SysManageInstructorComponent {
  isTilesView = false;

  showTilesView() {
    this.isTilesView = true;
  }

  showTableView() {
    this.isTilesView = false;
  }
  instructors: any[] = [];
  lastName: any;

  constructor() {}

  ngOnInit(): void {
    this.fetchInstructors();
  }

  async fetchInstructors() {
    try {
      const response = await axios.get('https://66216a2427fcd16fa6c6e28f.mockapi.io/API/V1/users');

      this.instructors = response.data.map((user) => ({
        id: user.id,
        lastName: user.lastname,
        firstName: user.firstname,
        middleName: user.middlename,
        numberOfClass: parseInt(user.numberofclass, 10),
        rfid: 'RFID' + user.rfid,
        mobile: user.mobile,
        domainEmail: user.domainemail,
        altEmail: user.altemail,
        picture: user.picture
      }));

      console.log('Fetched instructors:', this.instructors);
    } catch (error) {
      console.error('Error fetching instructors: ', error);
    }
  }

  Search() {
    if (this.lastName === '') {
      this.ngOnInit();
    } else {
      const options = {
        keys: ['lastName'], 
        includeScore: true, 
        threshold: 0.6, 
        location: 0, 
        distance: 100,
        maxResults: 5
      };

      const fuse = new Fuse(this.instructors, options);

      const results = fuse.search(this.lastName.trim().toLowerCase());

      this.instructors = results.map((result) => result.item);
    }
  }
}

