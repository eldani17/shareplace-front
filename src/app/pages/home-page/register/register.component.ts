import { Component, OnInit } from '@angular/core';
import { User } from '../../../@core/models/user.model';
import { Router } from '@angular/router';
import { UsersService } from '../../../@core/services/users.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:User = new User();
  
  constructor(
    private router: Router,
    private userSevice: UsersService
  ) { }

  ngOnInit() {
  }

  register(){
    console.log("user register", this.user);
    this.userSevice.register(this.user).subscribe(resp => {
      console.log("resp OK", resp);
      this.showNotification("success","Los datos ingresados fueron correctos.");
      this.router.navigate(['dashboard/']);
    },
    error => {
      console.log("error", error);
      this.showNotification("danger","Error en las credenciales.");
    });
  }

  showNotification(color, message){
    //const type = ['','info','success','warning','danger'];
    $.notify({
        icon: "notifications",
        message: message
    },{
        type: color,
        timer: 4000,
        placement: {
          from: 'top',
          align: 'center'
        }
    });
  }
}
