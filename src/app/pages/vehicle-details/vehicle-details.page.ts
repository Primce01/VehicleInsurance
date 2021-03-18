import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VehiclesService } from 'src/app/providers/vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
})
export class VehicleDetailsPage implements OnInit {
  vehicle: any;
  constructor(
    private vehicleService: VehiclesService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {

    const { vehicle_id } = this.route.snapshot.params;
    console.log(vehicle_id);
    this.vehicleService.getVehicle(vehicle_id).subscribe(data => {
      console.log(data);
      this.vehicle = data;
    })

  }
}
