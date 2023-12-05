import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrosUsuariosComponent } from './screen/registros-usuarios/registros-usuarios.component';
import { RegistroUsuarioComponent } from './screen/registro-usuario/registro-usuario.component';
import { EditUserComponent } from './screen/edit-user/edit-user.component';



const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'registros'},
  {path:'registros', component:RegistrosUsuariosComponent},
  {path:'registro',component:RegistroUsuarioComponent},
  {path:'editarUsuario/:id', component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
