import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../../../@core/models/user.model';
import { UsersService } from '../../../@core/services/users.service';

@Component({
  selector: 'app-profiles-detail',
  templateUrl: './profiles-detail.component.html',
  styleUrls: ['./profiles-detail.component.scss']
})
export class ProfilesDetailComponent implements OnInit {

  user:User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService 
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe( resp => {
      let result = resp['data'];
      this.user = result;
      console.log(this.user);
    });
  }
}
