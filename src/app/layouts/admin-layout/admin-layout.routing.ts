import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/examples/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/examples/user-profile/user-profile.component';
import { TableListComponent } from '../../pages/examples/table-list/table-list.component';
import { TypographyComponent } from '../../pages/examples/typography/typography.component';
import { IconsComponent } from '../../pages/examples/icons/icons.component';
import { MapsComponent } from '../../pages/examples/maps/maps.component';
import { NotificationsComponent } from '../../pages/examples/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/examples/upgrade/upgrade.component';
import { PublicationsComponent } from '../../pages/dashboard-page/publications/publications.component';
import { MyPublicationsComponent } from '../../pages/dashboard-page/my-publications/my-publications.component';
import { MainWizardComponent } from '../../pages/dashboard-page/my-publications-create/main-wizard/main-wizard.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { MyPublicationCreateTmpComponent } from '../../pages/dashboard-page/my-publication-create-tmp/my-publication-create-tmp.component';
import { LogoutComponent } from '../../pages/dashboard-page/logout/logout.component';

const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [
      {path: '', redirectTo: 'publicaciones', pathMatch: 'full'},
      {path: 'publicaciones', component: PublicationsComponent},
      {path: 'crear-publicaciones', component: MyPublicationCreateTmpComponent},
      {path: 'mis-publicaciones', component: MyPublicationsComponent},
      {path: 'cerrar-sesion', component: LogoutComponent},
      /*{
        path: 'mis-publicaciones-crear',
        component: MainWizardComponent,
        children: [{
          path: '',
          loadChildren: '../../pages/dashboard-page/my-publications-create/create-publication-wizard.module#CreatePublicationWizardModule'
        }]
      },*/
      /*{
        path: 'mis-publicaciones-crear',
        component: MainWizardComponent,
        children: [{
          path: '',
          loadChildren: '../../pages/dashboard-page/my-publications-create/create-publication-wizard.module#CreatePublicationWizardModule'
        }]
      },*/
      { path: 'dashboard2',         component: DashboardComponent },
      { path: 'user-profile',       component: UserProfileComponent },
      { path: 'table-list',         component: TableListComponent },
      { path: 'typography',         component: TypographyComponent },
      { path: 'icons',              component: IconsComponent },
      { path: 'maps',               component: MapsComponent },
      { path: 'notifications',      component: NotificationsComponent },
      { path: 'upgrade',            component: UpgradeComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(AdminLayoutRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminLayoutRoutingModule { }
