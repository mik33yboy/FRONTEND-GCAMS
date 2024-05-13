import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import axios from 'axios';


@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule, SharedModule, CanvasJSAngularChartsModule],
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.scss']
})
export class ManageStudentsComponent implements OnInit {

  selectedFormat: string = 'PDF'; // Default format

  exportData() {
    switch (this.selectedFormat) {
      case 'PDF':
        this.exportAsPDF();
        break;
      case 'Excel':
        this.exportAsExcel();
        break;
      case 'PNG':
        this.exportAsPNG();
        break;
      default:
        console.error('Unsupported format');
        break;
    }
  }

  exportAsPDF() {
    // Add logic to export data as PDF
    console.log('Exporting data as PDF');
  }

  exportAsExcel() {
    // Add logic to export data as Excel
    console.log('Exporting data as Excel');
  }

  exportAsPNG() {
    // Add logic to export data as PNG
    console.log('Exporting data as PNG');
  }
  
  students: any[] = [];
  notifications: any[] = [];
  perPage = 10;
  currentPage = 1;
  totalPages = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setupSelectBoxListener();
    console.log('Manage Class component initialized');
    this.fetchStudents();
    this.fetchNotifications();
    }

  navigateToStartAttendance() {
    this.router.navigate(['/instructor/newattendance'], { relativeTo: this.route });
  }

  navigateToStartManualAttendance() {
    this.router.navigate(['/instructor/manualnewattendance'], { relativeTo: this.route });
  }

  navigateToStudentProfile() {
    this.router.navigate(['/instructor/studentprofile'], { relativeTo: this.route });
  }

  setupSelectBoxListener() {
      const selectBoxes = document.querySelectorAll<HTMLSelectElement>('.mySelect');
      selectBoxes.forEach(selectBox => {
          selectBox.addEventListener('change', () => {
              const selectedValue = selectBox.value;
              // Reset styles
              selectBox.style.backgroundColor = 'white';
              selectBox.style.color = 'black';
  
              // Apply styles based on selected option
              if (selectedValue === 'cleared') {
                  selectBox.style.backgroundColor = 'green';
                  selectBox.style.color = 'white';
              } else if (selectedValue === 'pending') {
                  selectBox.style.backgroundColor = 'rgb(184, 127, 23)';
                  selectBox.style.color = 'white';
              } else if (selectedValue === 'not-valid') {
                  selectBox.style.backgroundColor = 'rgb(184, 23, 23)';
                  selectBox.style.color = 'white';
              }
          });
      });
  }

  async fetchStudents() {
    try {
      const response = await axios.get('https://66216a2427fcd16fa6c6e28f.mockapi.io/API/V1/users');
  
    
      if (Array.isArray(response.data)) {
        this.students = response.data.map(user => ({
          id: user.id || '',
          lastName: user.lastname || '',
          firstName: user.firstname || '',
          middleName: user.middlename || '',
          numberOfClass: parseInt(user.numberofclass, 10) || 0,
          rfid: 'RFID' + (user.rfid || ''),
          mobile: user.mobile || '',
          domainEmail: user.domainemail || '',
          altEmail: user.altemail || '',
          picture: user.picture || ''
        }));
  
        this.totalPages = Math.ceil(this.students.length / this.perPage);
  
        console.log('Fetched students:', this.students);
      } else {
        console.error('Invalid data format returned from the server.');
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  }
  

  async fetchNotifications() {
    try {
      const response = await axios.get('https://66216a2427fcd16fa6c6e28f.mockapi.io/API/V1/users');

      this.notifications = response.data.map((user) => ({
        lastName: user.lastname,
        firstName: user.firstname,
        numberOfClass: parseInt(user.numberofclass, 10),
        rfid: 'RFID' + user.rfid,
        picture: user.picture  
      }));

      console.log('Fetched notifications:', this.notifications);
    } catch (error) {
      console.error('Error fetching students: ', error);
    }
  }

  get displayedData(): any[] {
    const start = (this.currentPage - 1) * this.perPage;
    const end = start + this.perPage;
    return this.students.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}
