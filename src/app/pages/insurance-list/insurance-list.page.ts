import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsuranceService } from 'src/app/providers/insurance.service';


@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.page.html',
  styleUrls: ['./insurance-list.page.scss'],
})
export class InsuranceListPage implements OnInit {
  [x: string]: any;
  insurances:any[];
  constructor(
    private insuranceService: InsuranceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.insuranceService.getInsurances().subscribe(data => {
      console.log(data);
      this.insurances= data;
    })
  }
}