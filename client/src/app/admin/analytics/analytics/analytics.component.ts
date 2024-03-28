import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {
  public salesChart: any;
  public productSegmentPieChart: any;
  public selectedArr=[];

  ngOnInit(): void {
    this.selectedArr = this.dayArr;
    this.createChart();
    
  }



  dayArr: any =['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
  '2022-05-14', '2022-05-15'];

  momArr:any =["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  monthOnMonth(){
    Chart.getChart("chart1")?.destroy();
    this.selectedArr = this.momArr
    this.createChart();
  }

  dailyRevenue(){
    Chart.getChart("chart1")?.destroy();
    this.selectedArr = this.dayArr
    this.createChart();
  }

  createChart(){

    this.productSegmentPieChart = new Chart("chart1", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.selectedArr, 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574'],
            backgroundColor: '#802f59'
          }
        ]
      },
      options: {
        aspectRatio:2
      }
    });

    this.salesChart = new Chart("chart2", {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        labels: [
        'Breakfast',
        'Lunch',
        'Snacks'
      ],
      datasets: [{
        label: 'Order Quantity',
        data: [300, 150, 100],
        backgroundColor: [
          'rgba(145, 38, 84, 0.75)',
          'rgba(108, 101, 186, 0.75)',
          'rgba(83, 186, 93, 0.75)',
        ],
        borderColor: [
          'rgba(255, 255, 255 ,1)',
          'rgba(255, 255, 255 ,1)',
          'rgba(255, 255, 255 ,1)',
        ],
        hoverOffset: 4
      },]
  },
  options: {
    hover:{
      // mode:'y'
    },
    plugins: {
      legend: {

        position: 'top',
        title: {
          display: false,
          padding: 1
        },
        labels: {
          // color: '#ffffff',
          padding: 8,

        }
      }
    },

    // rotation: -90,
    // circumference: 180,
    radius:145,
    cutout:50,

  },
  });
  }
}
