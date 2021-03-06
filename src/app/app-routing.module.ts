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
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
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
    path: 'insurance-update',
    loadChildren: () => import('./pages/insurance-update/insurance-update.module').then( m => m.InsuranceUpdatePageModule)
  },
  {
    path: 'downloads',
    loadChildren: () => import('./pages/downloads/downloads.module').then( m => m.DownloadsPageModule)
  },
  {
    path: 'insurance-details',
    loadChildren: () => import('./pages/insurance-details/insurance-details.module').then( m => m.InsuranceDetailsPageModule)
  },
  {
    path: 'insurance-list',
    loadChildren: () => import('./pages/insurance-list/insurance-list.module').then( m => m.InsuranceListPageModule)
  },
  {
    path: 'insurance-delete',
    loadChildren: () => import('./pages/insurance-delete/insurance-delete.module').then( m => m.InsuranceDeletePageModule)
  },
  {
    path: 'insurance-add',
    loadChildren: () => import('./pages/insurance-add/insurance-add.module').then( m => m.InsuranceAddPageModule)
  },
  
  {
    path: 'licence-list',
    loadChildren: () => import('./pages/licence-list/licence-list.module').then( m => m.LicenceListPageModule)
  },
  {
    path: 'licence-add',
    loadChildren: () => import('./pages/licence-add/licence-add.module').then( m => m.LicenceAddPageModule)
  },
  {
    path: 'licence-details',
    loadChildren: () => import('./pages/licence-details/licence-details.module').then( m => m.LicenceDetailsPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },

  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
