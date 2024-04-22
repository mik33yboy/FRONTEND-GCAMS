import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

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
    
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setupSelectBoxListener();
    console.log('Manage Class component initialized');
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
}
