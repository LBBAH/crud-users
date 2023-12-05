import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './screen/registro-usuario/registro-usuario.component';
import { RegistrosUsuariosComponent } from './screen/registros-usuarios/registros-usuarios.component';
import { EditUserComponent } from './screen/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    RegistrosUsuariosComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
