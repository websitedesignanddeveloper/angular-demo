import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/services/dashboard.service';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.scss']
})
export class AdminSectionComponent implements OnInit {
  dtOptions: any = {}
  public userList: any = [];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Bfrtip',
      buttons: [{extend: 'csv',  className: "btn csvButton"}],
      columnDefs: [
        {
            orderable: false,
            targets: [ 1, 2, 3, 4 ],
        }]
    };
    this.callUsersList();
  }

  callUsersList() {
    this.dashboardService.getUsersList().subscribe(response => {
      this.userList = response;
    }, error => {
      console.log(error);
    })
  }

}
