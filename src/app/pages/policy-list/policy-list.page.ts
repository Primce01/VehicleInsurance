import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/providers/policy.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.page.html',
  styleUrls: ['./policy-list.page.scss'],
})
export class PolicyListPage implements OnInit {

  policies: any[];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolices().subscribe((data: any[]) => {
      this.policies = data;
      console.log(data);
    })
  }

}
