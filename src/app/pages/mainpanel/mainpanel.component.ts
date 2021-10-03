import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css']
})
export class MainpanelComponent implements AfterViewInit, OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('visitsalechart') visitsalechart;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.canvas = this.visitsalechart.nativeElement;
    // this.ctx = this.canvas.getContext('2d');

    // const visitsalechart = new Chart(this.ctx, {
    //   type: 'line',
    //   data: {
    //     datasets: [{
    //       label: 'First dataset',
    //       data: [0, 20, 40, 50]
    //     }],
    //     labels: ['January', 'February', 'March', 'April']
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         suggestedMin: 50,
    //         suggestedMax: 100
    //       }
    //     }
    //   }
    // });

  }

}
