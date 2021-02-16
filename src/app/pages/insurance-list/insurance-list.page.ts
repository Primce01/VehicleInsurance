import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/providers/payment.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.page.html',
  styleUrls: ['./insurance-list.page.scss'],
})
export class InsuranceListPage implements OnInit {
  [x: string]: any;
insurance: any;
  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.paymentService.getPayment(this.insurance).subscribe(data => {
      console.log(data);
      this.insurance = data;
    })
  }
}