import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routes
import { AdminLayoutRoutingModule } from './admin-layout.routing';
import { WizardRoutingModule } from '../../pages/dashboard-page/my-publications-create/wizard-routing.module';

//Pages Example
import { DashboardComponent } from '../../pages/examples/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/examples/user-profile/user-profile.component';
import { TableListComponent } from '../../pages/examples/table-list/table-list.component';
import { TypographyComponent } from '../../pages/examples/typography/typography.component';
import { IconsComponent } from '../../pages/examples/icons/icons.component';
import { MapsComponent } from '../../pages/examples/maps/maps.component';
import { NotificationsComponent } from '../../pages/examples/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/examples/upgrade/upgrade.component';

// Modulos
import { CreatePublicationWizardModule } from '../../pages/dashboard-page/my-publications-create/create-publication-wizard.module';

//Pages SharePlace
import { PublicationsComponent } from '../../pages/dashboard-page/publications/publications.component';
import { MyPublicationsComponent } from '../../pages/dashboard-page/my-publications/my-publications.component';
import { MyPublicationCreateTmpComponent } from '../../pages/dashboard-page/my-publication-create-tmp/my-publication-create-tmp.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from '../../components/components.module';
import { HomeLayoutRoutingModule } from '../home-layout/home-layout.routing';
import { MainWizardComponent } from '../../pages/dashboard-page/my-publications-create/main-wizard/main-wizard.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatGridListModule,
  MatAutocompleteModule
} from '@angular/material';
import { LogoutComponent } from '../../pages/dashboard-page/logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    AdminLayoutRoutingModule,
    CreatePublicationWizardModule,
    FlexLayoutModule
  ],
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PublicationsComponent,
    MyPublicationsComponent,
    MyPublicationCreateTmpComponent,
    LogoutComponent,
  ]
})

export class AdminLayoutModule {}
