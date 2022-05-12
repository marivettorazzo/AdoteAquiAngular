import { Dog } from './modelDog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GaleriaService {
  url = 'https://apidoguinhos.herokuapp.com/';
  Dogs: any;
  constructor(private http: HttpClient) {}
  getDogs() {
    this.http.get(`${ this.url }results`).subscribe((res)=>{
      this.Dogs = res
    }, (err)=>{
      let retorno = "One error ocurred "+ err
      return retorno
    })

  }
}
