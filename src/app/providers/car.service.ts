import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(){
    return this.http.get('/assets/data/car.json')
  }

  getCar(id){
    return this.http.get('/assets/data/car.json').pipe(
      map((data: any[]) => {
        return data.find(car => car.id == id)
      })
    )
  }

  
}
