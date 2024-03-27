import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {
  public chart: any;
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
  
    this.chart = new Chart("chart1", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.selectedArr, 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
