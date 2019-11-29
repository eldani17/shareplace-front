import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Pages
import { AboutusComponent } from '../../pages/home-page/aboutus/aboutus.component';
import { HomeComponent } from '../../pages/home-page/home/home.component';
import { HomeLayoutComponent } from './home-layout.component';
import { LoginComponent } from '../../pages/home-page/login/login.component';
import { ProfilesComponent } from '../../pages/home-page/profiles/profiles.component';
import { RegisterComponent } from '../../pages/home-page/register/register.component';
import { ProfilesDetailComponent } from '../../pages/home-page/profiles-detail/profiles-detail.component';


const HomeLayoutRoutes: Routes = [{
  path: 'visitante',
    component: HomeLayoutComponent,
    children: [
      {path: '', redirectTo: 'inicio', pathMatch: 'full'},
      {path: 'inicio', component: HomeComponent},
      {path: 'iniciar-sesion', component: LoginComponent},
      {path: 'registrarse', component: RegisterComponent},
      {path: 'acerca-de', component: AboutusComponent},
      {path: 'perfiles', component: ProfilesComponent},
      {path: 'detalle-perfil/:id', component: ProfilesDetailComponent},
      {path: 'buscar-perfiles/:search', component: ProfilesComponent},
    ]
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(HomeLayoutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
  
export class HomeLayoutRoutingModule { }