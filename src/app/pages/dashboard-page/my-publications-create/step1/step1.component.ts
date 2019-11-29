import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { Step1 } from 'app/@core/data/wizard-create-publication/wizard-create-publication.model';

//Services
import { WizardCreatePublicationService } from 'app/@core/data/wizard-create-publication/wizard-create-publication.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  step1: Step1 = new Step1();

  constructor(
    private router: Router,
    private wizardService: WizardCreatePublicationService) { }

  ngOnInit() {
    this.step1 = this.wizardService.getStep1();
  }

  save(form:any):boolean{
    if (!form.valid){
      return false;
    }
    this.wizardService.setStep1(this.step1);
    return true;
  }

  goToNextStep(form:any){
    if(this.save(form)){
      this.router.navigate(['/mis-publicaciones-crear/paso2']);
    }
  }
}
