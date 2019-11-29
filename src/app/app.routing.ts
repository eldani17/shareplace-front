import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const routes: Routes =[
  {
    path: '', redirectTo: 'visitante', pathMatch: 'full'
  },
  {
    path: 'visitante',
    loadChildren: './layouts/home-layout/home-layout.module#HomeLayoutModule'
  },
  {
    path: 'dashboard',
    loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
