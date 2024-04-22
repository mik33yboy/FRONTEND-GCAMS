import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): boolean {
    // Perform authentication logic here, for demonstration purpose, let's assume hardcoded credentials
    if (email === 'user@admin.com' && password === '12345') {
      // Set role in localStorage for future authorization checks
      localStorage.setItem('role', 'admin');
      return true;
    } else if (email === 'user@registrar.com' && password === '12345') {
      localStorage.setItem('role', 'registrar');
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'admin';
  }
}
