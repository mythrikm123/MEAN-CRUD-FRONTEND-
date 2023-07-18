import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableserviceService } from './services/tableservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

 constructor(private router:Router,private authService: TableserviceService){}
 //Login Logic
  login(){
    this.router.navigate(['login'])
  }
  //signup logic
  signup(){
    this.router.navigate(['signup'])
  }
  //Logout Logic
  onLogout() {
    this.authService.logout();
  }
}
