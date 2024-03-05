import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    const isAuthenticated = this.authService.login(this.username, this.password);

    if (isAuthenticated) {
      console.log('Successfully signed in:', this.username);
      this.router.navigate(['/member-list']);
    } else {
      console.log('Invalid credentials. Please try again.');
      // You can add error handling or display a message to the user.
    }
  }
}