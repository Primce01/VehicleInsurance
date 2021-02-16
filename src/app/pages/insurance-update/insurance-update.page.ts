import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/providers/payment.service';
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
    vehicle_name: new FormControl('', Validators.required),
    freq: new FormControl('', Validators.required),
    method: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    vehicle: new FormControl('', Validators.required),
    licence: new FormControl('', Validators.required),
  })
  vehicles: any[];
  payment: any;
  constructor(
    private vehicleService: VehiclesService,
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.paymentService.getPayment(this.payment).subscribe(data => {
    //   console.log(data)
    //   this.payment = data;
    // })
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    })
  }

  onSubmit() {
    console.log(this.form.value);
    this.paymentService.updatePayment(this.form.value)
    this.form.reset();
    this.router.navigateByUrl('insurance-list');
  }
}
