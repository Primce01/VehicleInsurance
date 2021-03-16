import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/providers/invoice.service';

@Component({
  selector: 'app-licence-list',
  templateUrl: './licence-list.page.html',
  styleUrls: ['./licence-list.page.scss'],
})
export class LicenceListPage implements OnInit {

  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit() {
    
  }
}
