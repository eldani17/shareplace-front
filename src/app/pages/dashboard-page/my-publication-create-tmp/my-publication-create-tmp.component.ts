import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationsService } from 'app/@core/services/publications.service';
import { ConditonsService } from './../../../@core/services/conditons.service';
import { FormControl } from '@angular/forms';
import { Publication } from 'app/@core/models/publications.model';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { UsersService } from '../../../@core/services/users.service';

@Component({
  selector: 'app-my-publication-create-tmp',
  templateUrl: './my-publication-create-tmp.component.html',
  styleUrls: ['./my-publication-create-tmp.component.scss']
})
export class MyPublicationCreateTmpComponent implements OnInit {

  listConditions: Array<string> = new Array<string>();
  controlConditions:FormControl = new FormControl();
  filteredConditions: Observable<string[]>;
  listConditionOfPublication: Array<string> = new Array();
  conditionNew:string = '';
  publiciationData:Publication = new Publication();

  constructor(
    private router: Router,
    private publicationService: PublicationsService,
    private conditionService: ConditonsService,
    private userService: UsersService
  ) { 
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

  goToNextFinish(){
    let publication: Publication = this.publiciationData;
    //publication.user = this.userService.user;
    publication.conditions = this.listConditionOfPublication;
    this.publicationService.createPublication(publication).subscribe((resp) =>{
      publication.clear();
      this.router.navigate(['dashboard/mis-publicaciones']);
    });
  }

  addImage(event:any){
    const file: File = event.target.files[0];
    console.log("imagen seleccionada", file.name);
  }
}
