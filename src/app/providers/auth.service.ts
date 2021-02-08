import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public readonly auth: AngularFireAuth ) { }

  async register(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  async login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.auth.signOut();
  }

  getUser() {
    return this.auth.user
  }

  isLoggedIn() {
    return this.auth.user.pipe(
      map(data => {
        return data ? true: false;
      })
    ) 
  }
}
