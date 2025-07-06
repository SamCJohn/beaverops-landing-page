import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { LoginComponent } from './auth/login/login';
import { SignupComponent } from './auth/signup/signup';
import { CloudTabsComponent } from './cloud-tabs-component/cloud-tabs-component';
import { PricingComponent } from './pricing-component/pricing-component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent }, 
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {path: 'features', component: CloudTabsComponent},
    { path: 'pricing', component: PricingComponent },
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
