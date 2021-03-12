import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }
  getModel(model_id){
    return this.http.get(`https://vehiclelicence.herokuapp.com/api/models/${model_id}`)
  }
}
