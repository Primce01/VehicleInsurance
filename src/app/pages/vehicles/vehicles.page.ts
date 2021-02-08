import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { VehiclesService } from 'src/app/providers/vehicles.service';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {
  [x: string]: any;

  vehicles:any[];
  constructor(
    private vehicleService: VehiclesService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(data => {
      console.log(data);
      this.vehicles = data;
    })
  }
}
