import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PolicyService } from 'src/app/providers/policy.service';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.page.html',
  styleUrls: ['./policy-detail.page.scss'],
})
export class PolicyDetailPage implements OnInit {

  policy: any;

  constructor(
    private route: ActivatedRoute,
    private policyService: PolicyService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      console.log(data)
      console.log(data.policy_id)
      this.policyService.getPolicy(data.policy_id).subscribe(data1 => {
        console.log(data1)
        this.policy = data1;
      })
    });
  }

}
