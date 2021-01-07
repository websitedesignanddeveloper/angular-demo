import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpService{
  endPoint: string = 'login'
  constructor(private httpClient: HttpClient) { super(httpClient);}

  loginUser(param){
   return this.postLogin(this.endPoint,param);
  }
}
