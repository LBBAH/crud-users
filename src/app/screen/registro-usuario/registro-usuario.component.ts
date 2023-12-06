import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceApiService } from 'src/app/service-api.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit{


  formUser: FormGroup;
  respuestaRegistro:any;

  constructor(    
    private router:Router,
    private apiService:ServiceApiService,
    public formulario:FormBuilder
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
    throw new Error('Method not implemented.');
  }

  refistrarUsuario(){
    if (this.formUser.valid) {
      this.apiService.addUser(this.formUser.value).subscribe(res=>{
        this.respuestaRegistro=res;
        alert(this.respuestaRegistro.message)
      })
    }
    else{
      alert("Llene todos los datos")
    }
  }

}
