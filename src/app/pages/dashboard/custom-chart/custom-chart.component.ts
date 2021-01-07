import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrls: ['./custom-chart.component.scss']
})
export class CustomChartComponent implements OnInit {
  userData: any;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Agreeableness', 'Drive', 'Luck', 'Openess',];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { label: 'User Assest Graph' },
  ];

  constructor(private route: ActivatedRoute, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => {
      this.getGraphDetails(value.id)
    })
  }
  getGraphDetails(id) {
    this.dashboardService.getUserAssessmentGraph(id).subscribe(response => {
      this.userData = response;
      let arr = [];
      let data = this.userData['data'];
      for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
          arr.push(data[prop])
        }
      }
      this.barChartData[0].data = arr;
    }, error => {
      console.log(error);
    })
  }

}
