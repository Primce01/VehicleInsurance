import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { VehiclesService } from 'src/app/providers/vehicles.service';
import { PaymentService } from 'src/app/providers/payment.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-buy-insu',
  templateUrl: './buy-insu.page.html',
  styleUrls: ['./buy-insu.page.scss'],
})
export class BuyInsuPage implements OnInit {
  hero = 'Primce'
  payment:any = 'payment_id'
 payments: any;
  getPayment: any;
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

  
