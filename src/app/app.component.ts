import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthService
  ) { this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(){ 
   
  }

  logout(){
    this.authenticationService.logout();
  }
  
}
