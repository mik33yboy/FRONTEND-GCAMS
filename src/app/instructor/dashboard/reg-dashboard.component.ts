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
  series: ApexAxisChartSeries, ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  labels: any;
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
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './reg-dashboard.component.html',
  styleUrls: ['./reg-dashboard.component.scss']
})
export class RegDashboardComponent {



 // private props
 @ViewChild('growthChart') growthChart: ChartComponent;
 chartOptions: Partial<ChartOptions>;
 @ViewChild('bajajchart') bajajchart: ChartComponent;
 chartOptions1: Partial<ChartOptions>;
 monthChart: any;
 yearChart: any;
 colorChart = ['#ffffff'];

 // Constructor
 constructor() {
  this.chartOptions = {
    series: [
      {
        name: 'Present',
        data: [35, 35, 35, 80, 35, 20, 35]
      },
      {
        name: 'Late',
        data: [15, 35, 65, 40, 80, 25, 15]
      },
      {
        name: 'Absent',
        data: [35, 35, 20, 105, 100, 10, 65]
      },
    ],
    dataLabels: {
      enabled: false
    },
    chart: {
      type: 'bar',
      height: 480,
      stacked: false, // Set stacked to false for separate bars
      toolbar: {
        show: true
      }
    },
    colors: ['#274e13', '#e69138', '#911010', '#000000'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '90%', // Increase the column width for thicker bars
        barHeight: '100%' // Set the bar height to 100%
      }
    },
    xaxis: {
      type: 'category',
      categories: ['Aug', 'Sep', 'Sep', 'Nov', 'Dec', 'Jan', 'Feb']
    },
    grid: {
      strokeDashArray: 4
    },
    tooltip: {
      theme: 'dark'
    }
  };
}

// Life cycle events
ngOnInit(): void {
  setTimeout(() => {
    this.monthChart = new ApexCharts(document.querySelector('#tab-chart-1'), this.chartOptions);
    this.monthChart.render();
  }, 500);
}

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

 ListGroup = [
   {
     name: 'College of Computer Studies',
     profit: 'BSCS, BSEMC, BSIT, ACT',
     invest: '623 Students',
     bgColor: 'bg-light-success',
     icon: 'ti ti-user',
     color: 'text-success'
   },
   {
     name: 'College of Education, Arts and Sciences',
     profit: 'MATHSCI, ENGLISH, FILIPINO, SOC-STUD, BEED, BPED, BCAED',
     invest: '747 Students',
     bgColor: 'bg-light-success',
     icon: 'ti ti-user',
     color: 'text-success'
   },
   {
     name: 'College of Allied Health Studies',
     profit: 'BSN, BSM',
     invest: '249 Students',
     bgColor: 'bg-light-success',
     icon: 'ti ti-user',
     color: 'text-success'
   },
   {
     name: 'College of Hospitality, Tourism and Management',
     profit: 'BSTM, BSHM,',
     invest: '498 Students',
     bgColor: 'bg-light-success',
     icon: 'ti ti-user',
     color: 'text-success'
   },
   {
     name: 'College of Business and Accountancy',
     profit: 'BSBA, BSCA',
     invest: '374 Students',
     bgColor: 'bg-light-success',
     icon: 'ti ti-user',
     color: 'text-success'
   },
   {
     name: 'College Faculty',
     profit: 'Program Coordinators',
     invest: '23 Coordinators',
     bgColor: 'bg-light-success',
     icon: 'ti ti-user',
     color: 'text-success'
   },
   {
     name: 'College Proctors',
     profit: 'Subject Teachers',
     invest: '20 Teachers',
     bgColor: 'bg-light-success',
     icon: 'ti ti-user',
     color: 'text-success'
   }
 ];

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
}

