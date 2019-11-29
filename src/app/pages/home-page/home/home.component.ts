import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchInput:string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchProfiles(){
    console.log(this.searchInput);
    if (this.searchInput)
    {
      this.router.navigate(['visitante/buscar-perfiles/' + this.searchInput]);
    } 
  }
}
