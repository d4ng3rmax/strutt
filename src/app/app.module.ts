import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './_routing/routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import {
  MatInputModule, MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule, MatRadioModule,
  MatSelectModule, MatAutocompleteModule,
  MatIconModule, MatChipsModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,

    MatInputModule, MatButtonModule, MatButtonToggleModule,
    MatCheckboxModule, MatRadioModule,
    MatSelectModule, MatAutocompleteModule,
    MatIconModule, MatChipsModule
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
