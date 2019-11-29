import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../../../@core/services/users.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard/publicaciones', title: 'Inicio',  icon: 'home', class: '' },
    { path: '/dashboard/mis-publicaciones', title: 'Mis Publicaciones',  icon:'note', class: '' },
    /*{ path: '/dashboard', title: 'Dashboard',  icon: 'home', class: '' },
    { path: '/table-list', title: 'Mis Préstamos',  icon:'photo_camera', class: '' },
    { path: '/typography', title: 'Historial de Préstamos',  icon:'list_alt', class: '' },
    { path: '/icons', title: 'Mis Solicitudes',  icon:'group', class: '' },
    //{ path: '/icons', title: 'Emitidas',  icon:'', class: '' },
    //{ path: '/icons', title: 'Recibidas',  icon:'', class: '' },
    { path: '/maps', title: 'Mi Perfil',  icon:'person', class: '' },
    { path: '/notifications', title: 'Mis Mensajes',  icon:'message', class: '' },
    { path: '/notifications', title: 'Mis Favoritos',  icon:'notifications', class: '' },*/
    { path: '/dashboard/cerrar-sesion', title: 'Cerrar Sesión',  icon:'keyboard_backspace', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
  ) { 

  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
  };
}
