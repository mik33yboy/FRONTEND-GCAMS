import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import axios from 'axios';


@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.scss']
})
export class SysManageStudentsComponent {
  isTilesView = false;

  showTilesView() {
    this.isTilesView = true;
  }

  showTableView() {
    this.isTilesView = false;
  }

  students: any[] = [];
  lastName: any;

  constructor(){}

  ngOnInit() {
    this.fetchStudents();
  }

  async fetchStudents() {
    try {
      const response = await axios.get('https://66216a2427fcd16fa6c6e28f.mockapi.io/API/V1/users');

      this.students = response.data.map((user) => ({
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

      console.log('Fetched students:', this.students);
    } catch (error) {
      console.error('Error fetching students: ', error);
    }
  }

  Search() {
    if (this.lastName === "") {
      this.ngOnInit();
    } else {
      this.students = this.students.filter(res => {
        return res.lastName.toLocaleLowerCase().match(this.lastName.toLocaleLowerCase());
      });
    }
  }
}
