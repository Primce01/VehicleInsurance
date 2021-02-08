import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/providers/profile.service';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.page.html',
  styleUrls: ['./profile-add.page.scss'],
})
export class ProfileAddPage implements OnInit {
 
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    idnumber: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    cell: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  })
  profile: any;

  constructor(
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit() {
    this.profileService.getCurrentProfile().subscribe((userData: any) => {
      if(userData) this.form.patchValue(userData);
    })
  }

  onSubmit(){
    console.log(this.form.value);
    this.profileService.updateProfile(this.form.value);
    this.form.reset();
    this.router.navigateByUrl('profile');
  
  }
}
