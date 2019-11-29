import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { Step2 } from 'app/@core/data/wizard-create-publication/wizard-create-publication.model';

//Services
import { WizardCreatePublicationService } from 'app/@core/data/wizard-create-publication/wizard-create-publication.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  step2: Step2 = new Step2();

  constructor(
    private router: Router,
    private wizardService: WizardCreatePublicationService) { }

  ngOnInit() {
    this.step2 = this.wizardService.getStep2();
  }

  save(form:any):boolean{
    if (!form.valid){
      return false;
    }
    this.wizardService.setStep2(this.step2);
    return true;
  }

  goTopreviousStep(){
    this.router.navigate(['/mis-publicaciones-crear/paso1']);
  }

  goToNextStep(form:any){
    if(this.save(form)){
      this.router.navigate(['/mis-publicaciones-crear/paso3']);
    }
  }

}
