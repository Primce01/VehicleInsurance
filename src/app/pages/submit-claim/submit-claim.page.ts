import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClaimsService } from 'src/app/providers/claims.service';

@Component({
  selector: 'app-submit-claim',
  templateUrl: './submit-claim.page.html',
  styleUrls: ['./submit-claim.page.scss'],
})
export class SubmitClaimPage implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    where: new FormControl('', Validators.required),
    make: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    brief: new FormControl('', Validators.required),
  })

  constructor(private claimsservice: ClaimsService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form.value);


  }
}
