// Angular Import
import { Component, ViewChild,  ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// project import
import { SharedModule } from '../../shared/shared.module';

// Bootstrap Import
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

// third party
import { NgApexchartsModule } from 'ng-apexcharts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

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
  imports: [CommonModule, SharedModule, CanvasJSAngularChartsModule],
  templateUrl: './myclass.component.html',
  styleUrls: ['./myclass.component.scss']
})
export class MyClassComponent implements AfterViewInit {
  
  @ViewChild('openModalBtn') openModalBtn!: ElementRef;
  @ViewChild('myModal') modal!: ElementRef;
  @ViewChild('closeModalBtn') closeModalBtn!: ElementRef;

  chartOptions = {
	  animationEnabled: true,
	  theme: "dark2",
	  exportEnabled: true,
	  title: {
		  text: "Developer Work Week"
	  },
	  subtitles: [{
		  text: "Median hours/week"
	  }],
	  data: [{
		  type: "pie", //change type to column, line, area, doughnut, etc
		  indexLabel: "{name}: {y}%",
		  dataPoints: [
		  	{ name: "Overhead", y: 9.1 },
		  	{ name: "Problem Solving", y: 3.7 },
		  	{ name: "Debugging", y: 36.4 },
		  	{ name: "Writing Code", y: 30.7 },
		  	{ name: "Firefighting", y: 20.1 }
		  ]
	  }]
	}

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.setupModal();
  }

  setupModal(): void {
    this.openModalBtn.nativeElement.addEventListener("click", () => {
      this.modal.nativeElement.style.display = "block";
    });

    this.closeModalBtn.nativeElement.addEventListener("click", () => {
      this.modal.nativeElement.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === this.modal.nativeElement) {
        this.modal.nativeElement.style.display = "none";
      }
    });
  }

  navigateToReason() {
    this.router.navigate(['/student/reason']);
  }

  // private props
  @ViewChild('growthChart') growthChart: ChartComponent;
  @ViewChild("pieChart") chart: ChartComponent;
  chartOptions1: Partial<ChartOptions>;
  monthChart: any;
  yearChart: any;
  colorChart = ['#673ab7'];


  ListGroup = [
    {
    }
  ];

  
}



