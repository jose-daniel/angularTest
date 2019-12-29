import {RouterModule, Routes} from '@angular/router';
import { HomeLayoutComponent, HellLayoutComponent } from './layouts/index';

const APP_ROUTES: Routes = [
  {path: 'goToHell', component: HellLayoutComponent },
  {path: '**', pathMatch: 'full', component: HomeLayoutComponent }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
