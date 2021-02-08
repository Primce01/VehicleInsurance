import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './providers/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'emergency',
    loadChildren: () => import('./pages/emergency/emergency.module').then( m => m.EmergencyPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'policy-list',
    loadChildren: () => import('./pages/policy-list/policy-list.module').then( m => m.PolicyListPageModule)
  },
  {
    path: 'policy-detail',
    loadChildren: () => import('./pages/policy-detail/policy-detail.module').then( m => m.PolicyDetailPageModule)
  },
  {
    path: 'claims',
    loadChildren: () => import('./pages/claims/claims.module').then( m => m.ClaimsPageModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./pages/vehicles/vehicles.module').then( m => m.VehiclesPageModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./pages/buy/buy.module').then( m => m.BuyPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  // {
  //   // path: 'login',
  //   // loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'vehicle-add',
    loadChildren: () => import('./pages/vehicle-add/vehicle-add.module').then( m => m.VehicleAddPageModule)
  },
  {
    path: 'vehicle-edit',
    loadChildren: () => import('./pages/vehicle-edit/vehicle-edit.module').then( m => m.VehicleEditPageModule)
  },
  {
    path: 'vehicle-delete',
    loadChildren: () => import('./pages/vehicle-delete/vehicle-delete.module').then( m => m.VehicleDeletePageModule)
  },
  {
    path: 'vehicle-details',
    loadChildren: () => import('./pages/vehicle-details/vehicle-details.module').then( m => m.VehicleDetailsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-add',
    loadChildren: () => import('./pages/profile-add/profile-add.module').then( m => m.ProfileAddPageModule)
  },
  {
    path: 'submit-claim',
    loadChildren: () => import('./pages/submit-claim/submit-claim.module').then( m => m.SubmitClaimPageModule)
  },
  {
    path: 'buy-insu',
    loadChildren: () => import('./pages/buy-insu/buy-insu.module').then( m => m.BuyInsuPageModule)
  },
  {
    path: 'downloads',
    loadChildren: () => import('./pages/downloads/downloads.module').then( m => m.DownloadsPageModule)
  },
  // {
  //   path: 'profile-details',
  //   loadChildren: () => import('./pages/profile-details/profile-details.module').then( m => m.ProfileDetailsPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
