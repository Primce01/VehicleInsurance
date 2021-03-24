import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/providers/invoice.service';
import { LicensesService } from 'src/app/providers/licenses.service';


@Component({
  selector: 'app-licence-list',
  templateUrl: './licence-list.page.html',
  styleUrls: ['./licence-list.page.scss'],
})
export class LicenceListPage implements OnInit {
licenses: any;
  constructor(
    private licensesService: LicensesService
  ) { }

  ngOnInit() {
    this.licensesService.getLicenses().subscribe(data => {
      console.log(data);
      this.licenses = data;
      
    })
  }
}
