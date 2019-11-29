import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainWizardComponent } from './main-wizard/main-wizard.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

const wizardRoutes: Routes = [
  {
    path: 'mis-publicaciones-crear',
    component: MainWizardComponent,
    children: [
      {path: '', redirectTo: 'paso1', pathMatch: 'full'},
      {path: 'paso1', component: Step1Component},
      {path: 'paso2', component: Step2Component},
      {path: 'paso3', component: Step3Component},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(wizardRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class WizardRoutingModule { }
