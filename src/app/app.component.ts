import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {NavbarComponent} from '../app/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatButtonModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examportal';
}
