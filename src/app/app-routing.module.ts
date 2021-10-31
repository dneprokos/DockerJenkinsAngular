import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { CheckBoxesComponent } from './_components/check-boxes/check-boxes.component';
import { InputFieldsComponent } from './_components/input-fields/input-fields.component';
import { DropDownsComponent } from './_components/drop-downs/drop-downs.component';
import { RadioButtonsComponent } from './_components/radio-buttons/radio-buttons.component';
import { TogglesComponent } from './_components/toggles/toggles.component';
import { DatePickersComponent } from './_components/date-pickers/date-pickers.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { TablePageComponent } from './_components/table-page/table-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'check-box', component: CheckBoxesComponent, canActivate: [AuthGuardService] },
  { path: 'input', component: InputFieldsComponent, canActivate: [AuthGuardService] },
  { path: 'drop-down', component: DropDownsComponent, canActivate: [AuthGuardService] },
  { path: 'radio-button', component: RadioButtonsComponent, canActivate: [AuthGuardService] },
  { path: 'table', component: TablePageComponent, canActivate: [AuthGuardService] },
  { path: 'toggle', component: TogglesComponent, canActivate: [AuthGuardService] },
  { path: 'date-picker', component: DatePickersComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
