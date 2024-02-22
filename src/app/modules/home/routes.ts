import { Route } from '@angular/router';
import { ListComponent } from '../employees/list/list.component';
import { HomeComponent } from './home.component';

// In admin/routes.ts:
export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'employees', component: ListComponent }],
  },
];
