import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//AngularMaterial
import { 
  MatButtonModule, 
  MatRippleModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatSelectModule, 
  MatTooltipModule, 
  MatAutocompleteModule,
  MatGridListModule
} from '@angular/material';

// Rutas
import { WizardRoutingModule } from './wizard-routing.module';

//Componentes
import { MainWizardComponent } from './main-wizard/main-wizard.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

@NgModule({
  declarations: [
    MainWizardComponent,
    Step1Component, 
    Step2Component, 
    Step3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    WizardRoutingModule,
  ],
  exports: [
    MainWizardComponent,
    Step1Component, 
    Step2Component, 
    Step3Component
  ]
})
export class CreatePublicationWizardModule { }
