import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    console.log(this.form.value)
    this.authService.login(this.email.value, this.password.value)
      .then(data => {
        console.log(data);
        this.router.navigateByUrl('/profile');
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
              text: 'Register',
              handler: () => {
                console.log('Register clicked');
                this.router.navigateByUrl('/registration');
              }
            },
          ]
        });
        toast.present();
      })
  }
}