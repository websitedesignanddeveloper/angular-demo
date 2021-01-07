import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dtOptions: any = {}
  dtUserOptions: any = {}
  public userList: any = [];
  public assestList: any = [];
  public userRole: string;
  constructor(public authService: AuthService, private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole');

    this.callAssessments();

    this.dtUserOptions = {
      pagingType: 'full_numbers',
      columnDefs: [
        {
          orderable: false,
          targets: [1, 2, 3],
        }]
      // dom: 'Bfrtip',
    };


  }

  callUsersList() {
    this.dashboardService.getUsersList().subscribe(response => {
      this.userList = response;
    }, error => {
      console.log(error);
    })
  }

  callAssessments() {
    this.dashboardService.getUserAssessment().subscribe(response => {
      this.assestList = response;
    }, error => {
      console.log(error);
    })
  }
  routeToChart(id) {
    this.router.navigate(['dashboard', id])
  }
}
