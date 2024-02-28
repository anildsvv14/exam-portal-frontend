import { Component, OnInit,inject} from '@angular/core';
import { NgIf } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet,RouterLink,RouterLinkActive,Router} from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,RouterLinkActive,RouterLink,NgIf],
  providers:[NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isLoggedIn=false;
  user:any=null;
  
  
  constructor(private loginService:LoginService){
    const router=inject(Router);
  }
  ngOnInit(): void {
    this.isLoggedIn=this.loginService.isLoggedIn();
    this.user=this.loginService.getUser();
    console.log("login"+this.isLoggedIn);
    console.log("user"+this.user);
    
  }
  logout(){
    if(this.isLoggedIn){
     
      this.loginService.logout();
      window.location.href="/login";
      this.isLoggedIn=false;
    }
}

}