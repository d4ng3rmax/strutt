import { Routes } from '@angular/router';

import { HomeComponent } from '../home';
import { ResidentialComponent } from '../residential';
import { CorporativeComponent } from '../corporative';
import { ContactComponent } from '../contact';

export const ROUTES: Routes = [

  {
    path: '',
    component: HomeComponent,
    data: {
      'pageTitle': 'Gerenciamento de obras civis',
    }
  },
  {
    path: 'residencial',
    component: ResidentialComponent,
    data: {
      'pageTitle': 'Serviço Residencial',
      'breadcrumb': 'residencial'
    }
  },
  {
    path: 'corporativo',
    component: CorporativeComponent,
    data: {
      'pageTitle': 'Serviço Corporativo',
      'breadcrumb': 'corporativo'
    }
  },
  {
    path: 'contato',
    component: ContactComponent,
    data: {
      'pageTitle': 'Como podemos te ajudar?',
      'breadcrumb': 'contato'
    }
  },

  { path: '**', redirectTo: '' }
];
