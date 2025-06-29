import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})


export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToLogin(){
    this.router.navigate(['/login']);
  }
  navigateToSignup(){
    this.router.navigate(['/signup']);
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
