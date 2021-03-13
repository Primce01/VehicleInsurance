import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/providers/invoice.service';

@Component({
  selector: 'app-licence-list',
  templateUrl: './licence-list.page.html',
  styleUrls: ['./licence-list.page.scss'],
})
export class LicenceListPage implements OnInit {
vehicle_name: any
  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit() {
    this.invoiceService.getInvoices().subscribe(data => {
      console.log(data);
      this.vehicle_name = data;
    })
  }
}
