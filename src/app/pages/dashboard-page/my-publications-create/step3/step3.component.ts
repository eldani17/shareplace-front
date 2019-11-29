import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

//Services
import { WizardCreatePublicationService } from 'app/@core/data/wizard-create-publication/wizard-create-publication.service';

//Models
import { Conditions } from 'app/@core/models/conditions.model';
import { PublicationsService } from '../../../../@core/services/publications.service';
import { Publication } from 'app/@core/models/publications.model';
import { ConditonsService } from '../../../../@core/services/conditons.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  listConditions: Array<string> = new Array<string>();
  controlConditions:FormControl = new FormControl();
  filteredConditions: Observable<string[]>;
  listConditionOfPublication: Array<string> = new Array();
  conditionNew:string = '';

  constructor(
    private router: Router,
    private wizardCreatePublicationService: WizardCreatePublicationService,
    private publicationService: PublicationsService,
    private conditionService: ConditonsService) { 
    
    this.conditionService.getAllConditions().subscribe((resp) =>{
      let listConditions = resp["data"];
      listConditions.forEach(l => {
        this.listConditions.push(l.name);
      });
    });
  }

  ngOnInit() {
    this.filteredConditions = this.controlConditions.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value:string):string[]{
    const filterValue = value.toLowerCase();
    return this.listConditions.filter(option => option.toLowerCase().includes(filterValue));
  }

  displayAutocomplete(subject){
    return subject ? subject : undefined;
  }

  addCondition(){
    this.listConditionOfPublication.push(this.conditionNew);
    this.conditionNew = '';
    console.log(this.listConditionOfPublication);
  }

  goTopreviousStep(){
    this.router.navigate(['/mis-publicaciones-crear/paso2']);
  }

  goToNextFinish(){
    let publication: Publication = this.wizardCreatePublicationService.publicationData;
    publication.conditions = this.listConditionOfPublication;
    this.publicationService.createPublication(publication).subscribe((resp) =>{
      publication.clear();
      this.router.navigate(['dashboard/mis-publicaciones']);
    });
  }
}
