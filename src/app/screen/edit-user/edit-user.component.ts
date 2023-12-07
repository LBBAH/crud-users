import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceApiService } from 'src/app/service-api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  UsuariosId:any;
  messageUpdate:any;
  formUser: FormGroup;
  datosUsuario:any

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
    this.UsuariosId=this.activeRouter.snapshot.paramMap.get('id')  
    this.getUserId(this.UsuariosId)
  }

  getUserId(id:any){
    this.apiService.getUserId(id).subscribe(res=>{
      this.datosUsuario=res

      this.formUser.setValue({
        nonbre: this.datosUsuario.nonbre,
        nonbreUsuario: this.datosUsuario.nonbreUsuario,
        telefono: this.datosUsuario.telefono,
        correo: this.datosUsuario.correo,
        contrasenia: this.datosUsuario.contrasenia,        
      }); 
      console.log(this.datosUsuario)
    })
  }
  
  actualizaDatos(id:any){
    this.apiService.updateUser(id, this.formUser.value).subscribe(res=>{
      this.messageUpdate=res
      alert(this.messageUpdate.message)
      this.router.navigate(['registros']);    
    })    
  }

  registros(){
    this.router.navigate(['registros']);    
  }
}
