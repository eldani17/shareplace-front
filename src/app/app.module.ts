import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatAutocompleteModule, MatFormFieldModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { HomeLayoutModule } from './layouts/home-layout/home-layout.module';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FontAwesomeModule,
    HttpClientModule,
    AdminLayoutModule,
    HomeLayoutModule,
    MDBBootstrapModule.forRoot(),
    /*AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),*/
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    SortByPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
