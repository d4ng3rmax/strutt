import { Routes } from '@angular/router';

import { HomeComponent } from '../home';
import { ContactComponent } from '../contact';

export const ROUTES: Routes = [

  { path: '', component: HomeComponent},

  {
    path: 'contato',
    component: ContactComponent
  },

  { path: '**', redirectTo: '' }
];
