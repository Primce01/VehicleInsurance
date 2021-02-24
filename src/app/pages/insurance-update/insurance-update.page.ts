import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceService } from 'src/app/providers/insurance.service';
import { VehiclesService } from 'src/app/providers/vehicles.service';
@Component({
  selector: 'app-insurance-update',
  templateUrl: './insurance-update.page.html',
  styleUrls: ['./insurance-update.page.scss'],
})
export class InsuranceUpdatePage implements OnInit {
  [x: string]: any;
  makes: any[];
  make: any;
  model: any;
  
  form: FormGroup = new FormGroup({
    make_name: new FormControl('', Validators.required),
    freq: new FormControl('', Validators.required),
    method: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    vehicle: new FormControl('', Validators.required),
    licence: new FormControl('', Validators.required),
  })
  vehicles: any[];
  
  constructor(
    private vehicleService: VehiclesService,
    private insuranceService: InsuranceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
   
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    })
  }
  

  onSubmit() {
    console.log(this.form.value);
    this.insuranceService.updateInsurance(this.form.value)
    this.form.reset();
    this.router.navigateByUrl('insurance-details');
  }
}
