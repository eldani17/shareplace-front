import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../@core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.userService.logOut();
    return this.router.navigate(['/visitante/iniciar-sesion']);
  }

}
