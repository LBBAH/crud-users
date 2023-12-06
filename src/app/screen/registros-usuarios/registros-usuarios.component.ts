import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceApiService } from 'src/app/service-api.service';

@Component({
  selector: 'app-registros-usuarios',
  templateUrl: './registros-usuarios.component.html',
  styleUrls: ['./registros-usuarios.component.css']
})
export class RegistrosUsuariosComponent implements OnInit{

  idUsuario:any

  Usuarios:any;
  deleteMessage:any;
  formUser: FormGroup;
  constructor(    
    private router:Router,
    private apiService:ServiceApiService,
    public formulario:FormBuilder,
    private activeRouter:ActivatedRoute, 
  ) { 
    this.formUser=this.formulario.group({
      nonbre:['', [Validators.required]],
      nonbreUsuario:['', [Validators.required]],
      telefono:['', [Validators.required]],
      correo:['' , [Validators.required]],
      contrasenia:['', [Validators.required]]      
    })
  }
  
  ngOnInit(): void {
    this.idUsuario=this.activeRouter.snapshot.paramMap.get('id')  
    this.getUsers()    
  }

  editarUsuario(id:any){
    this.router.navigate(['editarUsuario/', id]);    
  }

  borrarUsuario(id:any){
    this.apiService.deleteUser(id).subscribe(res=>{
      this.deleteMessage=res
      alert(this.deleteMessage.message)
      this.getUsers()
    })   
  }


  

  getUsers(){
    this.apiService.getUsers().subscribe(res=>{
      console.log(res)
      this.Usuarios=res;
    })
  }


}

