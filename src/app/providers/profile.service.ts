import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  items: Observable<any[]>;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  getProfiles() {
    return this.firestore.collection("profiles").valueChanges();
  }

  getProfile(id: string) {
    return this.firestore.collection("profiles").doc(id).valueChanges();
  }
  
  getCurrentProfile() {
    return this.authService.getUser().pipe(
      switchMap(userData => {
        return this.firestore.collection("profiles").doc(userData.uid).valueChanges();
      })
    )
  }
  
  async updateProfile(profile: any) {
    const userData = await this.authService.getUser().pipe(take(1)).toPromise();
    this.firestore.collection('profiles').doc(userData.uid).set({...profile, user_id: userData.uid })  
  }
}  