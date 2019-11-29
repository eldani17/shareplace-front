import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../@core/services/users.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  dni: string;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userSevice: UsersService
  ) { }

  ngOnInit() {
  }
  
  login(){
    this.userSevice.login(this.dni,this.password).subscribe(resp => {
      this.userSevice.user = resp["user"];
      localStorage.setItem('currentDataUser', resp["user"]);
      this.showNotification("success","Los datos ingresados fueron correctos.");
      this.router.navigate(['dashboard/']);
    },
    error => {
      console.log("error", error);
      this.showNotification("danger","Error en las credenciales.");
    });
  }

  register(){
    this.router.navigate(['visitante/registrarse']); 
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
