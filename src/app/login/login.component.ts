import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {
    console.log('Login component initialized');
  }

  loginUser(email: string, password: string) {
    console.log('Email:', email);
    console.log('Password:', password);

    if (email === 'user@admin.com' && password === '12345') {
      console.log('Login successful');
      this.router.navigate(['/admin/admindashboard']); // navigate to admin dashboard
    }
    else if (email === 'user@instructor.com' && password === '12345') {
      console.log('Login successful');
      this.router.navigate(['/instructor/dashboard']); // navigate to instructor dashboard
    }
    else if (email === 'user@student.com' && password === '12345') {
      console.log('Login successful');
      this.router.navigate(['/student/myclass']); // navigate to student dashboard
    }
    else {
      console.log('Invalid credentials');
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']); // navigate to register component
  }
  navigateToResetPassword() {
    this.router.navigate(['/resetpassword']); // navigate to register component
  }
}
