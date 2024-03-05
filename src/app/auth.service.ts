import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Perform actual authentication logic (e.g., check against a backend server)
    // For simplicity, let's assume a username "user" and password "password" for this example.
    if (username === 'pranali' && password === 'pranali123') {
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}