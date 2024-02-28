import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
