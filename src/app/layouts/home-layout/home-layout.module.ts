import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
//import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSliderModule } from '@angular/material/slider';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

//Routes
import { HomeLayoutRoutingModule } from './home-layout.routing';

//Pages
import { HomeComponent } from '../../pages/home-page/home/home.component';
import { ComponentsModule } from '../../components/components.module';
import { AboutusComponent } from '../../pages/home-page/aboutus/aboutus.component';
import { LoginComponent } from '../../pages/home-page/login/login.component';
import { HomeLayoutComponent } from './home-layout.component';
import { ProfilesComponent } from '../../pages/home-page/profiles/profiles.component';
import { ProfilesDetailComponent } from '../../pages/home-page/profiles-detail/profiles-detail.component';
import { RegisterComponent } from '../../pages/home-page/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HomeLayoutRoutingModule,
  ],
  declarations: [
    HomeLayoutComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    ProfilesComponent,
    ProfilesDetailComponent,
    RegisterComponent
  ]
})
export class HomeLayoutModule { }
