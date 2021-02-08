import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimsService } from 'src/app/providers/claims.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.page.html',
  styleUrls: ['./claims.page.scss'],
})
export class ClaimsPage implements OnInit {
  
 
  constructor(private claimsservice: ClaimsService,private router: Router ) { }

    ngOnInit() {
    }
  onSubmit() {
    this.router.navigateByUrl('submit-claim');
  }
  }
  



