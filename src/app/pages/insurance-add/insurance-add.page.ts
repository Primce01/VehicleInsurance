import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/providers/vehicles.service';
import { switchMap } from 'rxjs/operators';
import { ModelService } from 'src/app/providers/model.service';
import { InvoiceService } from 'src/app/providers/invoice.service';
@Component({
  selector: 'app-insurance-add',
  templateUrl: './insurance-add.page.html',
  styleUrls: ['./insurance-add.page.scss'],
})
export class InsuranceAddPage implements OnInit {

  vehicles: any[];

  form: FormGroup = new FormGroup({
    vehicle_id: new FormControl('', Validators.required),
    vehicle_name: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    invoice: new FormControl('insurance', Validators.required)
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
    private invoiceService: InvoiceService,
    private router: Router,
    private route: ActivatedRoute,

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
      this.amount.patchValue(data.price);
      this.amount.patchValue(5)
      console.log(this.form.value)
    })

    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data
      console.log(data)
    })

  }

  async onSubmit() {
    const invoice: any = await this.invoiceService.addInvoice(this.form.value);
    console.log(invoice);
    this.router.navigateByUrl(`/payment/${invoice.id}`);
  }
}
