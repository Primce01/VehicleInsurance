import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './providers/auth.service';
import { Router } from '@angular/router';
// import { url } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
 
  public selectedIndex = 0;
  public appPages = [
    // {
    //   title: 'Inbox',
    //   url: '/folder/Inbox',
    //   icon: 'mail'
    // },
    // {
    //   title: 'Outbox',
    //   url: '/folder/Outbox',
    //   icon: 'paper-plane'
    // },
    // {
    //   title: 'Favorites',
    //   url: '/folder/Favorites',
    //   icon: 'heart'
    // },
    // {
    //   title: 'Archived',
    //   url: '/folder/Archived',
    //   icon: 'archive'
    // },
    // {
    //   title: 'Trash',
    //   url: '/folder/Trash',
    //   icon: 'trash'
    // },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'My Profile',
      url: 'profile',
      icon: 'person'
    },
    {
      title: 'My Licences',
      url: 'licence-list',
      icon: 'receipt'
    },
    {
      title: 'My Vehicles',
      url: 'vehicles',
      icon: 'car-sport'
    },
    {
      title: 'About Us',
      url: 'aboutus',
      icon: 'library'
    },
    {
      title: 'FAQ',
      url: 'faq',
      icon: 'reader'
    },
    // {
    //   title: 'Emergency Contacts',
    //   url: 'emergency',
    //   icon: 'call'
    // },
    {
      title: 'Contact Us',
      url: 'contact',
      icon: 'call'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    this.authService.getUser().subscribe(data => console.log('Regsistered User', data));
  }

  onSignOut() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
