import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  form: FormGroup = new FormGroup({

    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    console.log(this.form.value);
    this.authService.register(this.email.value, this.password.value)
      .then(async data => {
        console.log(data);
        const toast = await this.toastController.create({
          message: 'You have successfully registered. Proceed to Sign In',
          position: 'top',
          duration: 5000,
          color: 'success',
          buttons: [
            {
              side: 'end',
              text: 'Login',
              handler: () => {
                console.log('Login clicked');
                this.router.navigateByUrl('/login');
              }
            },
          ]
        });
        toast.present();
      })
      .catch(async err => {
        console.log(err);
        const toast = await this.toastController.create({
          message: err.message,
          position: 'top',
          duration: 5000,
          color: 'danger',
          buttons: [
            {
              side: 'end',
              text: 'Login',
              handler: () => {
                console.log('Login clicked');
                this.router.navigateByUrl('/login');
              }
            },
          ]
        });
        toast.present();
      })
  }
}
