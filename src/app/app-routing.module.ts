import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrosUsuariosComponent } from './screen/registros-usuarios/registros-usuarios.component';
import { RegistroUsuarioComponent } from './screen/registro-usuario/registro-usuario.component';



const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'registros'},
  {path:'registros', component:RegistrosUsuariosComponent},
  {path:'registro',component:RegistroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
