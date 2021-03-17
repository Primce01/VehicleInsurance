import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from 'src/app/providers/policy.service';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.page.html',
  styleUrls: ['./policy-detail.page.scss'],
})
export class PolicyDetailPage implements OnInit {

  policy: any;
  descriptions: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private policyService: PolicyService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.policyService.getPolicy(data.policy_id).subscribe((data1: any) => {
        this.policy = data1;
        this.descriptions = data1.description.split('\n')
      })
    });
  }
  onSubmit(){
    this.router.navigateByUrl('/insurance-add');
  }
}
