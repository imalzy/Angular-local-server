import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SettingsService } from '../settings.service';
import { CommonModule, NgClass, NgFor, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
    CommonModule,
  ],
})
export class SidebarComponent {
  public color!: string;
  public menuItems: any;
  public activeFontColor: string;
  public normalFontColor: string;
  public dividerBgColor: string;
  constructor(public settingsService: SettingsService) {
    this.menuItems = ROUTES;
    this.activeFontColor = 'rgba(0,0,0,.6)';
    this.normalFontColor = 'rgba(255,255,255,.8)';
    this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
  }

  ngOnInit() {
    this.color = this.settingsService.getSidebarFilter();
    this.settingsService.sidebarFilterUpdate.subscribe((filter: string) => {
      this.color = filter;
      if (filter === '#fff') {
        this.activeFontColor = 'rgba(0,0,0,.6)';
      } else {
        this.activeFontColor = 'rgba(255,255,255,.8)';
      }
    });
    this.settingsService.sidebarColorUpdate.subscribe((color: string) => {
      if (color === '#fff') {
        this.normalFontColor = 'rgba(0,0,0,.6)';
        this.dividerBgColor = 'rgba(0,0,0,.1)';
      } else {
        this.normalFontColor = 'rgba(255,255,255,.8)';
        this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
      }
    });
  }
  ngOnDestroy() {
    this.settingsService.sidebarFilterUpdate.unsubscribe();
    this.settingsService.sidebarColorUpdate.unsubscribe();
  }

  ngAfterViewInit() {}
}
export const ROUTES = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
  { path: 'profile', title: 'User Profile', icon: 'person', children: null },
  { path: 'table', title: 'Table List', icon: 'content_paste', children: null },
  {
    path: '#component',
    id: 'component',
    title: 'Component',
    icon: 'apps',
    children: [
      { path: 'components/price-table', title: 'Price Table', icon: 'PT' },
      { path: 'components/panels', title: 'Panels', icon: 'P' },
      { path: 'components/wizard', title: 'Wizard', icon: 'W' },
    ],
  },
  {
    path: 'notification',
    title: 'Notification',
    icon: 'notifications',
    children: null,
  },
  { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
  { path: 'settings', title: 'Settings', icon: 'settings', children: null },
];
