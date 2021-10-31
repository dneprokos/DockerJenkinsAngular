import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './_core/material.module';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { AuthServiceService } from './_services/authService/auth-service.service';
import { AuthGuardService } from './_services/auth-guard.service';

import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './_components/nav-bar/nav-bar.component';
import { GlobalEventsManagerService } from './_services/global-events-manager.service';
import { FooterComponent } from './_components/footer/footer.component';
import { CheckBoxesComponent } from './_components/check-boxes/check-boxes.component';
import { InputFieldsComponent } from './_components/input-fields/input-fields.component';
import { DropDownsComponent } from './_components/drop-downs/drop-downs.component';
import { RadioButtonsComponent } from './_components/radio-buttons/radio-buttons.component';
import { ListBoxesComponent } from './_components/list-boxes/list-boxes.component';
import { TogglesComponent } from './_components/toggles/toggles.component';
import { DatePickersComponent } from './_components/date-pickers/date-pickers.component';
import { TablePageComponent } from './_components/table-page/table-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    CheckBoxesComponent,
    InputFieldsComponent,
    DropDownsComponent,
    RadioButtonsComponent,
    ListBoxesComponent,
    TogglesComponent,
    DatePickersComponent,
    TablePageComponent
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
