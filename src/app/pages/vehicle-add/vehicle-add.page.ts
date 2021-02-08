import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';
import { CarService } from 'src/app/providers/car.service';
import { VehiclesService } from 'src/app/providers/vehicles.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.page.html',
  styleUrls: ['./vehicle-add.page.scss'],
})
export class VehicleAddPage implements OnInit {

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
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
     this.carService.getCars().subscribe((data: any[]) =>{
      console.log(data)
      this.makes = data;
    })

    this.make_id.valueChanges.subscribe(data => {
      console.log(data);
      this.make = this.makes.find(c => c.id === data);
      if (this.make)
        this.make_name.patchValue(this.make.name);
    })
    this.model_id.valueChanges.subscribe(data => {
      console.log(data);
      if (this.make)
        this.model = this.make.models.find(m => m.id === data);
      if (this.model)
        this.model_name.patchValue(this.model.name);
    })
  }

  onSubmit(){
    console.log(this.form.value);
    this.vehicleService.updateVehicle(this.form.value);
    this.form.reset();
    this.router.navigateByUrl('/vehicles');
  }

}
