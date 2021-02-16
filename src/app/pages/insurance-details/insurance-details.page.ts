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
  insurance: any 
  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const { insurance_id } = this.route.snapshot.params;
console.log(insurance_id);
this.paymentService.getPayment(insurance_id).subscribe(data => {
console.log(data);
this.insurance = data;
  })
 }

}
