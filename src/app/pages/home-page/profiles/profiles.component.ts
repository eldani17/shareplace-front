import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//Modelos
import { User } from '../../../@core/models/user.model';

//Servicios
import { UsersService } from '../../../@core/services/users.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  
  users:Array<User>;
  urlPath:string;
  inputSearch:string='';

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.urlPath = this.route['_routerState'].snapshot.url;

    let urlShort = this.urlPath.split('/');
    let url = urlShort[2];
    let search = this.route.snapshot.paramMap.get('search');

    if (url == "buscar-perfiles"){
      /*console.log("buscar en la DB", urlShort);
      console.log("palabra a buscar",search);*/

      //aca deberia de generar un nuevo point del lado del back
      //para poder consumir
      this.userService.getUserBySearch(search).subscribe((resp: any) => {
        let result = resp['data'];
        this.users = result;
      });
    }else{
      //traigo todos los perfiles de la DB
      //Generar nuevo point para filtrar los usuarios que desean ser visibles
      this.userService.getAllUsers().subscribe((resp: any) => {
        let result = resp['data'];
        this.users = result;
      });
    }
    
  }

  ngOnInit() {
  }

  searchLocal(){
    //acá deberia de usar el nuevo point que genere para la busqueda en el constructor
    console.log("busqueda local", this.inputSearch);
    this.userService.getUserBySearch(this.inputSearch).subscribe((resp: any) => {
      let result = resp['data'];
      this.users = result;
    });
  }

  goProfileDetail(user){
    this.router.navigate(['visitante/detalle-perfil/' + user.id]); 
  }
}
