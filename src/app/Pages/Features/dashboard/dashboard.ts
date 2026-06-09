import { Component, AfterViewInit } from '@angular/core';

declare var Highcharts: any;
declare var ApexCharts: any;

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    // reload social media init script
    const script = document.createElement('script');

    script.src = 'assets/js/dashboard/social-media.init.js';

    script.type = 'text/javascript';

    script.onload = () => {
      console.log('Charts Loaded');
    };

    document.body.appendChild(script);
  }
}