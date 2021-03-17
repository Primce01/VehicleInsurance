import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { VehiclesService } from 'src/app/providers/vehicles.service';

@Component({
  selector: 'app-vehicle-delete',
  templateUrl: './vehicle-delete.page.html',
  styleUrls: ['./vehicle-delete.page.scss'],
})
export class VehicleDeletePage implements OnInit {

  vehicle: any;
  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehiclesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        return this.vehicleService.getVehicle(params.vehicle_id)
      }),
    ).subscribe(data => {
      console.log(data);
      this.vehicle = data
    })
  }
  onDelete() {
    this.vehicleService.deleteVehicle(this.vehicle.id);
    this.router.navigateByUrl('/vehicles')
  }
}
