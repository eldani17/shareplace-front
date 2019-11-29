import { Injectable } from '@angular/core';
import { Publication } from 'app/@core/models/publications.model';
import { Step1, Step2 } from './wizard-create-publication.model';

@Injectable({
  providedIn: 'root'
})
export class WizardCreatePublicationService {

  public publicationData: Publication=new Publication();
  private isStep1FormValid:boolean=false;
  private isStep2FormValid:boolean=false;

  constructor() { }

  getStep1(): Step1 {
    var step1: Step1 = {
      title: this.publicationData.title,
      category: ''
    };
    return step1;
  }

  getStep2(): Step2 {
    var step2: Step2 = {
      description: this.publicationData.description,
      images: null
    };
    return step2;
  }

  setStep1(data:Step1){
    this.publicationData.title = data.title;
    //this.publicationData.category
    this.isStep1FormValid = true;
  }

  setStep2(data:Step2){
    this.publicationData.description = data.description;
    //this.publicationData.category
    this.isStep2FormValid = true;
  }
}
