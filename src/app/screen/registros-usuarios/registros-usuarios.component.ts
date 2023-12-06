import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros-usuarios',
  templateUrl: './registros-usuarios.component.html',
  styleUrls: ['./registros-usuarios.component.css']
})
export class RegistrosUsuariosComponent implements OnInit{

  constructor(    
    private router:Router    
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  editarUsuario(id:any){
    this.router.navigate(['editarUsuario/', id]);    
  }

  borrarUsuario(){
    alert("Usuario eliminado con exito")
  }
}

