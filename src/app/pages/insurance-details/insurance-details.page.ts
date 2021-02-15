import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { VehiclesService } from 'src/app/providers/vehicles.service';
import { PaymentService } from 'src/app/providers/payment.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.page.html',
  styleUrls: ['./insurance-details.page.scss'],
})
export class InsuranceDetailsPage implements OnInit {
  payment:any = 'payment_id'
  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const { payment_id } = this.route.snapshot.params;
console.log(payment_id);
this.paymentService.getPayment(payment_id).subscribe(data => {
console.log(data);
this.payment = data;
  })
 }

}
