import { Route } from '@angular/router';
import { ListComponent } from '../employees/list/list.component';
import { HomeComponent } from './home.component';
import { CreateComponent } from '../employees/create/create.component';
import { DetailComponent } from '../employees/detail/detail.component';

// In admin/routes.ts:
export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'employees', component: ListComponent },
      { path: 'employees/create', component: CreateComponent },
      { path: 'employees/detail/:id', component: DetailComponent },
    ],
  },
];
