import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Button } from 'protractor';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InsuranceService } from 'src/app/providers/insurance.service';
import { InvoiceService } from 'src/app/providers/invoice.service';
import { ModelService } from 'src/app/providers/model.service';
import { VehiclesService } from 'src/app/providers/vehicles.service';
import { LicencefreqService } from 'VehicleInsurance/src/app/providers/licencefreq.service';

@Component({
  selector: 'app-licence-add',
  templateUrl: './licence-add.page.html',
  styleUrls: ['./licence-add.page.scss'],
})
export class LicenceAddPage implements OnInit {
  vehicles: any[];
  insurances: any[];
  licences: any;
  form: FormGroup = new FormGroup({
    vehicle_id: new FormControl('', Validators.required),
    vehicle_name: new FormControl('', Validators.required),
    licence: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    type: new FormControl('license')
  })

  get amount() {
    return this.form.get('amount');
  }

  get vehicle_id() {
    return this.form.get('vehicle_id');
  }

  get vehicle_name() {
    return this.form.get('vehicle_name');
  }

  constructor(
    private vehicleService: VehiclesService,
    private modelService: ModelService,
    private licencefreqService: LicencefreqService,
    private invoiceService: InvoiceService,
    private insuranceService: InsuranceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.vehicle_id.valueChanges.pipe(
      switchMap(id => {
        const vehicle = this.vehicles.find(v => v.id === id)
        this.vehicle_name.patchValue(vehicle.make_name + ' ' + vehicle.model_name);
        return this.modelService.getModel(vehicle.model_id)
      })
    ).subscribe((data: any) => {
      console.log(data)
      // this.amount.patchValue(data.price);
      this.amount.patchValue(5)
      console.log(this.form.value)
    })

    this.vehicle_id.valueChanges.pipe(
      switchMap(id => {
        return this.insuranceService.getVehicleInsurance(id)
      })
    ).subscribe(data => {
      console.log(data)
      this.insurances = data
    })

    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data
      console.log(data)
    })
    this.licencefreqService.getLicence().subscribe(data => {
      this.licences = data
      console.log(data)
    })
  }

  async onSubmit() {

    const invoice: any = await this.invoiceService.addInvoice(this.form.value);
    console.log(invoice);
    this.router.navigateByUrl(`/payment/${invoice.id}`);

  }

}

