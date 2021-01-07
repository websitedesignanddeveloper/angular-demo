import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public host = `${environment.BASE_URL}` // host base url


  //get header options with content-type
  public getOptions() {
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
    const httpOptions = {
      headers: headers,
    }
    return httpOptions;
  }
  constructor(public http: HttpClient) { }

  postLogin(url: string, data: any) {
    return this.http.post<any>(this.host + url, data).pipe(map(
      response => {
        return response
      }));
  }
  // , this.getOptions()
  getData(urlWithQueryParam: string){
    return this.http.get(this.host + urlWithQueryParam).pipe(map(
      response => {
        return response
      }));
  }
}
