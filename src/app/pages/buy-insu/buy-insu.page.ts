import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { VehiclesService } from 'src/app/providers/vehicles.service';
import { PaymentService } from 'src/app/providers/payment.service';

@Component({
  selector: 'app-buy-insu',
  templateUrl: './buy-insu.page.html',
  styleUrls: ['./buy-insu.page.scss'],
})
export class BuyInsuPage implements OnInit {
  payment: any;
 payments: any;
  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    const {payment } = this.route.snapshot.params;
    console.log();
    this.paymentService.getPayment(payment).subscribe(data => {
      console.log(data);
      this.payment = data;  
    })
   }
  
}

  
