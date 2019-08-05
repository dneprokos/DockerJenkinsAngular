import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './_core/material.module';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { AuthServiceService } from './_services/authService/auth-service.service';
import { AuthGuardService } from './_services/auth-guard.service';

import {FormsModule} from '@angular/forms';
import { NavBarComponent } from './_components/nav-bar/nav-bar.component';
import { GlobalEventsManagerService } from './_services/global-events-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [
    AuthServiceService,
    AuthGuardService,
    GlobalEventsManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
