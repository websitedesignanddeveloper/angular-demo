import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends HttpService {
  usersList: string = 'users';
  userAssessment: string = 'userassessments';
  userAssessmentGraph: string = 'userassessment/graph';
  constructor(private httpClient: HttpClient) { super(httpClient); }

  getUsersList() {
    return this.getData(this.usersList)
  }

  getUserAssessment() {
    return this.getData(this.userAssessment)
  }

  getUserAssessmentGraph(id) {
    return this.getData(this.userAssessmentGraph +'?id='+ id)
  }
}
