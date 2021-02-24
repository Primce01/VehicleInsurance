import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleuseService {

  constructor(private http: HttpClient) { }

  getVehicleUses(){
    return this.http.get('/assets/data/vehicle-use.json')
  }
}
