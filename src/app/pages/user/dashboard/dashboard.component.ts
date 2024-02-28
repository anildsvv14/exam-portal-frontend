import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class UserDashboardComponent {

  constructor(private loginService:LoginService){
    this.getUser();
   }
   getUser(){
    console.log(localStorage.getItem('token'));
    this.loginService.loginUser(localStorage.getItem('token'));
    console.log("login user called");
    this.loginService.getCurrentUser().subscribe(
      (user:any)=>{
        this.loginService.setUser(user);
        console.log(user);
        
      },
      (error)=>{
          console.log("something went wrong");
      }
    );
   }
}
