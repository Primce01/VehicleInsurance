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
  

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    const { data } = this.route.snapshot.params;
    console.log(data);
    this.paymentService.getpayments().subscribe(data => {
      console.log(data);
      this.payment = data;
    })
   }
  
}

  
