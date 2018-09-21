import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';

@NgModule({
  imports: [
    // Router
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }
