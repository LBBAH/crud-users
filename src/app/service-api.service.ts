import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor( private httpClient: HttpClient ) { }

  private apiUrl = 'https://educacionespecialmx.site/back_crud/public_html/api';

  getUsers(){
    return this.httpClient.get(`${this.apiUrl}/getUsers`);
  }

  getUserId(id:any){
    return this.httpClient.get(`${this.apiUrl}/getUserId/`+id);
  }

  addUser(datos:any) {
    return this.httpClient.post(`${this.apiUrl}/addUser`, datos);
  }

  updateUser(id:any,datos:any) {
    return this.httpClient.post(`${this.apiUrl}/updaUser/`+id, datos);
  }

  deleteUser(id:any){
    return this.httpClient.delete(`${this.apiUrl}/deleteUser/`+id);
  }

}
