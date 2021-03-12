import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { InsuranceService } from 'src/app/providers/insurance.service';
@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.page.html',
  styleUrls: ['./insurance-details.page.scss'],
})
export class InsuranceDetailsPage implements OnInit {
  insurance: any

  constructor(
    private insuranceService: InsuranceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const { insurance_id } = this.route.snapshot.params;
    console.log(insurance_id);
    this.insuranceService.getInsurance(insurance_id).subscribe(data => {
      console.log(data);
      this.insurance = data;
    })
  }

}
