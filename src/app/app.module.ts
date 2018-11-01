import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './_routing/routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResidentialComponent } from './residential/residential.component';
import { CorporativeComponent } from './corporative/corporative.component';
import { ContactComponent } from './contact/contact.component';

import {
  MatInputModule, MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule, MatRadioModule,
  MatSelectModule, MatAutocompleteModule,
  MatIconModule, MatChipsModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { CarouselComponent } from './_shared/_components/carousel/carousel.component';

import { NgxHmCarouselModule } from 'ngx-hm-carousel';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ResidentialComponent,
    CorporativeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),

    MatInputModule, MatButtonModule, MatButtonToggleModule,
    MatCheckboxModule, MatRadioModule,
    MatSelectModule, MatAutocompleteModule,
    MatIconModule, MatChipsModule,

    NgxHmCarouselModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,

    MatInputModule, MatButtonModule, MatButtonToggleModule,
    MatCheckboxModule, MatRadioModule,
    MatSelectModule, MatAutocompleteModule,
    MatIconModule, MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
