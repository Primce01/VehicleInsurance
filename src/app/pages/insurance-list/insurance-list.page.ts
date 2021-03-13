import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsuranceService } from 'src/app/providers/insurance.service';
import { InvoiceService } from 'src/app/providers/invoice.service';
import { VehiclesService } from 'src/app/providers/vehicles.service';


@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.page.html',
  styleUrls: ['./insurance-list.page.scss'],
})
export class InsuranceListPage implements OnInit {
  
  invoices:any;
  
  constructor(
    private invoiceService: InvoiceService,
    private vehicleService: VehiclesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.invoiceService.getInvoices().subscribe(data => {
      console.log(data);
      this.invoices = data;
    })
  }
}