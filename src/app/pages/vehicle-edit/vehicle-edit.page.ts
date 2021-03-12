import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CarService } from 'src/app/providers/car.service';
import { VehiclesService } from 'src/app/providers/vehicles.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.page.html',
  styleUrls: ['./vehicle-edit.page.scss'],
})
export class VehicleEditPage implements OnInit {

  vehicle; any;
  subscription: Subscription;
  makes: any[];
  make: any;
  model: any;
  form: FormGroup = new FormGroup({
    make_id: new FormControl('', Validators.required),
    model_id: new FormControl('', Validators.required),
    make_name: new FormControl('', Validators.required),
    model_name: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    chassis: new FormControl('', Validators.required),
    mileage: new FormControl('', Validators.required),
    reg: new FormControl('', Validators.required),
    use: new FormControl('', Validators.required),
  })

  get make_id() {
    return this.form.get('make_id');
  }
  get model_id() {
    return this.form.get('model_id');
  }
  get make_name() {
    return this.form.get('make_name');
  }
  get model_name() {
    return this.form.get('model_name');
  }

  constructor(
    private vehicleService: VehiclesService,
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.pipe(
      switchMap(params => {
        return this.vehicleService.getVehicle(params.vehicle_id)
      })
    ).subscribe(data => {
      this.vehicle = data;
      this.form.patchValue(data);
    });

    this.carService.getCars().subscribe((data: any[]) => {
      this.makes = data;
    })

    this.make_id.valueChanges.subscribe(data => {
      this.make = this.makes.find(c => c.id === data);
      if (this.make)
        this.make_name.patchValue(this.make.name);
    })

    this.model_id.valueChanges.subscribe(data => {
      if (this.make)
        this.model = this.make.models.find(m => m.id === data);
      if (this.model)
        this.model_name.patchValue(this.model.name);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log(this.form.value);
    this.vehicleService.updateVehicle({ ...this.vehicle, ...this.form.value });
    this.form.reset();
    this.router.navigateByUrl('vehicles');
  }
}
