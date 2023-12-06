import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros-usuarios',
  templateUrl: './registros-usuarios.component.html',
  styleUrls: ['./registros-usuarios.component.css']
})
export class RegistrosUsuariosComponent {

  constructor(    
    private router:Router    
  ) { }

  editarUsuario(id:any){
    this.router.navigate(['editarUsuario/', id]);    
  }

  borrarUsuario(id:any){
    alert("Usuario eliminado con exito")
  }
}

