// Axios Import
import axios from 'axios';
// Angular Import
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from '../../shared/shared.module';

// Bootstrap Import
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

// third party
import { NgApexchartsModule } from 'ng-apexcharts';
import ApexCharts from 'apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexGrid,
  ApexStroke,
  ApexTooltip
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  colors: string[];
  grid: ApexGrid;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './sys-dashboard.component.html',
  styleUrls: ['./sys-dashboard.component.scss']
})
export class SysDashboardComponent {
  // private props
  @ViewChild('growthChart') growthChart: ChartComponent;
  chartOptions: Partial<ChartOptions>;
  @ViewChild('pieChart') chart: ChartComponent;
  chartOptions1: Partial<ChartOptions>;
  monthChart: any;
  yearChart: any;
  colorChart = ['#673ab7'];

  // public Method
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      setTimeout(() => {
        this.monthChart = new ApexCharts(document.querySelector('#tab-chart-1'), this.monthOptions);
        this.monthChart.render();
      }, 200);
    }

    if (changeEvent.nextId === 2) {
      setTimeout(() => {
        this.yearChart = new ApexCharts(document.querySelector('#tab-chart-2'), this.yearOptions);
        this.yearChart.render();
      }, 200);
    }
  }

  monthOptions = {
    chart: {
      type: 'line',
      height: 90,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    stroke: {
      curve: 'smooth',
      width: 3
    },
    series: [
      {
        name: 'series1',
        data: [45, 66, 41, 89, 25, 44, 9, 54]
      }
    ],
    yaxis: {
      min: 5,
      max: 95
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return 'Total Course';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

  yearOptions = {
    chart: {
      type: 'line',
      height: 90,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    stroke: {
      curve: 'smooth',
      width: 3
    },
    series: [
      {
        name: 'series1',
        data: [35, 44, 9, 54, 45, 66, 41, 69]
      }
    ],
    yaxis: {
      min: 5,
      max: 95
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return 'Total Course';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

  logDashboardsData: any[] = [];
  notifDashboardsData: any[] = [];

  constructor() {}

  ngOnInit() {
    this.fetchLogDashboards();
    this.fetchNotifDashboards();
  }

  //Fetching Logs
  async fetchLogDashboards() {
    try {
      const response = await axios.get('https://66216a2427fcd16fa6c6e28f.mockapi.io/API/V1/users');
      this.logDashboardsData = response.data.map((user) => ({
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
      console.log('Fetched logs:', this.logDashboardsData);
    } catch (error) {
      console.error('Error fetching logs: ', error);
    }
  }

  //Fetching Notifications
  async fetchNotifDashboards() {
    try {
      const response = await axios.get('https://66216a2427fcd16fa6c6e28f.mockapi.io/API/V1/users');
      this.notifDashboardsData = response.data.map((user) => ({
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
      console.log('Fetched notifications:', this.notifDashboardsData);
    } catch (error) {
      console.error('Error fetching notifications: ', error);
    }
  }
}
