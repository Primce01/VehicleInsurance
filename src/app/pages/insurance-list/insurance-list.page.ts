import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { InsuranceService } from 'src/app/providers/insurance.service';
import { InvoiceService } from 'src/app/providers/invoice.service';
import { ModelService } from 'src/app/providers/model.service';
import { VehiclesService } from 'src/app/providers/vehicles.service';


@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.page.html',
  styleUrls: ['./insurance-list.page.scss'],
})
export class InsuranceListPage implements OnInit {

  constructor(
    private modelService: ModelService,
    private vehicleService: VehiclesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {


  }

}