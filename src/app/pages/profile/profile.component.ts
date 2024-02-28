import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { LoginService } from '../../services/login.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatListModule,MatCardModule,MatIconModule,
    RouterOutlet,RouterLink,RouterLinkActive,MatTableModule,
    MatButtonModule,NgIf
  ],
  providers:[],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent  implements OnInit{
  user:any=null;
  constructor(private loginService:LoginService){

  }

  ngOnInit(): void {
    this.user=this.loginService.getUser();
  }


}
