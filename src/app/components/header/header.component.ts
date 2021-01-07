import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean = false;
  user: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(value =>{
      if(value!==null){
        this.user = value;
        this.show = true;
      }
    })
  }
  logout(){
    this.show= false; 
    this.authService.logout();
  }
  goToRoute(value){
    this.router.navigate([value])
  }
}
