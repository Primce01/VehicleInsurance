import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getbuy() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getCars(){
    return this.http.get('/assets/data/car.json')
  }
  getCar(){
    return this.http.get('/assets/data/car.json')
  }
}
