import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { InsuranceService } from 'src/app/providers/insurance.service';
import { VehiclesService } from 'src/app/providers/vehicles.service';

@Component({
  selector: 'app-insurance-delete',
  templateUrl: './insurance-delete.page.html',
  styleUrls: ['./insurance-delete.page.scss'],
})
export class InsuranceDeletePage implements OnInit {
  insurance: any
  constructor(
    private insuranceService: InsuranceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        return this.insuranceService.getInsurance(params.insurance_id)
      }),
    ).subscribe(data => {
      console.log(data);
      this.insurance = data
    })
  }
  onDelete() {
    this.insuranceService.deleteInsurance(this.insurance.id);
    this.router.navigateByUrl('/insurance-list')
  }
}
