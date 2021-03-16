import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { InvoiceService } from 'src/app/providers/invoice.service';
import { ModelService } from 'src/app/providers/model.service';
import { PaymentService } from 'src/app/providers/payment.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  invoice: any;
  form: FormGroup = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.min(771000000), Validators.max(789000000)]),
    invoice_id: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    vehicle_id: new FormControl('', Validators.required),
    vehicle_name: new FormControl('', Validators.required)
  })

  get invoice_id() {
    return this.form.get('invoice_id');
  }

  get amount() {
    return this.form.get('amount')
  }

  get vehicle_id() {
    return this.form.get('vehicle_id')
  }

  get vehicle_name() {
    return this.form.get('vehicle_name')
  }

  constructor(
    private router: Router,
    private modelService: ModelService,
    private paymentService: PaymentService,
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    const { invoice_id } = this.route.snapshot.params;
    console.log(invoice_id);
    this.invoiceService.getInvoice(invoice_id).subscribe((data: any) => {
      console.log(data);
      this.invoice = data;
      this.invoice_id.patchValue(invoice_id);
      this.form.patchValue(data.items);
      console.log('Amount', this.amount)
    })

    this.paymentService.getPayment(invoice_id).subscribe((payment: any) => {
      if (payment && payment.status === 'Paid') {
        if (this.invoice.type == 'license')
          this.router.navigateByUrl('/licence-list');
        else if (this.invoice.type == 'insurance')
          this.router.navigateByUrl('/insurance-list');
      } else if (payment && payment.status === 'Cancelled') {
        this.toastController.create({
          message: 'Payment has been cancelled',
          color: 'danger',
          duration: 2000
        }).then(toast => {
          toast.present()
        })
      }
    })
  }

  async onSubmit() {
    const response = await this.paymentService.addPayment(this.form.value)
    console.log(response);
  }
}

