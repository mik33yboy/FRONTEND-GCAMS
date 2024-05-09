import axios from 'axios';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import jQuery
import * as $ from 'jquery';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './reg-dashboard.component.html',
  styleUrls: ['./reg-dashboard.component.scss']
})
export class RegDashboardComponent {

  logDashboardsData: any[] = [];

  constructor() {}

  ngOnInit() {
    this.fetchLogDashboards();
    this.initializeCalendar();
    this.initializeProgressBar();
  }

  async fetchLogDashboards() {
    try {
      const response = await axios.get('https://66216a2427fcd16fa6c6e28f.mockapi.io/API/V1/users');
      this.logDashboardsData = this.mapUserData(response.data);
      console.log('Fetched logs:', this.logDashboardsData);
    } catch (error) {
      console.error('Error fetching logs: ', error);
    }
  }


  private mapUserData(data: any[]): any[] {
    return data.map((user) => ({
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
  }

  private initializeCalendar() {
    const updateCalendar = () => {
      const year = Number($(".year option:selected").text());
      const month = Number($(".month option:selected").attr("name"));
      const daysInMonth = new Date(year, month, 0).getDate();
      const firstDay = new Date(year, month - 1, 1).getDay();

      $(".date__number").removeClass("date__number--true").text('');
      $(".date__number").each(function(index) {
        const dayNumber = index - firstDay + 1;
        if (dayNumber <= 0 || dayNumber > daysInMonth) {
          $(this).text('');
        } else {
          $(this).text(dayNumber);
        }
      });

      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      if (currentYear === year && currentMonth === month) {
        $(".date__number").each(function() {
          if (parseInt($(this).text(), 10) === currentDay) {
            $(this).addClass("date__number--true");
          }
        });
      }
    };

    $(document).ready(function() {
      $(".date__number").click(function() {
        $(".date__number").removeClass("date__number--true");
        $(this).addClass("date__number--true");
      });

      let date = new Date();
      let year: number = date.getFullYear();
      let month: number = date.getMonth() + 1;

      $(".yer").each(function() {
        if ( Number($(this).text()) === year ) {
          $(this).prop("selected", true);
        }
      });

      $(".mon").each(function() {
        if ( $(this).attr("name") === String(month) ) {
          $(this).prop("selected", true);
        }
      });

      updateCalendar();
      
      $(".choosen").text(date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear());
      
      $(".date").click(function() {
        const day = Number($(".date__number--true").text());
        const month = Number($(".month option:selected").attr("name"));
        const year = Number($(".year option:selected").text());
        $(".choosen").text(day + '.' + month + '.' + year);
      });

      $(".month, .year").change(function() {
        updateCalendar();
      });
    });
  
}
 private initializeProgressBar(): void {
  const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach((progressBar: HTMLElement) => {
    const progress = parseInt(progressBar.dataset['progress'] || '0', 10);
    progressBar.style.width = `${progress}%`;
  });
}

}
