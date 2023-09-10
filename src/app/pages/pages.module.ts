import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from "../app-routing.module";
import {FormsModule} from "@angular/forms";
import { SettingsComponent } from './settings/settings.component';
import { EntriesComponent } from './entries/entries.component';



@NgModule({
  declarations: [
    HomeComponent,
    CollectionsComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SettingsComponent,
    EntriesComponent
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule
    ]
})
export class PagesModule { }
