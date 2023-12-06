import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceApiService } from 'src/app/service-api.service';

@Component({
  selector: 'app-registros-usuarios',
  templateUrl: './registros-usuarios.component.html',
  styleUrls: ['./registros-usuarios.component.css']
})
export class RegistrosUsuariosComponent implements OnInit{


  Usuarios:any;
  deleteMessage:any;

  constructor(    
    private router:Router,
    private apiService:ServiceApiService
  ) { }
  
  ngOnInit(): void {
    this.getUsers()    
  }

  editarUsuario(id:any){
    this.router.navigate(['editarUsuario/', id]);    
  }

  borrarUsuario(id:any){

    this.apiService.deleteUser(id).subscribe(res=>{
      this.deleteMessage=res
      alert(this.deleteMessage.message)
    })
    alert("Usuario eliminado con exito")
  }


  getUsers(){
    this.apiService.getUsers().subscribe(res=>{
      console.log(res)
      this.Usuarios=res;
    })
  }
}

