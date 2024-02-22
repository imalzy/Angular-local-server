import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/core/layout/header/header.component';
import { SidebarComponent } from 'src/app/core/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [

    SidebarComponent,
    HeaderComponent,
    RouterModule
  ],
})
export class HomeComponent {

}
