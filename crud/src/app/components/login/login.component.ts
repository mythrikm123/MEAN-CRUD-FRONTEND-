import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableserviceService } from 'src/app/services/tableservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  formSubmitted = false;
  errorMessage = '';

  constructor(private output: TableserviceService, private router: Router) {}

  login() {
    this.formSubmitted = true;
    if (this.username && this.password) {
      const res = { username: this.username, password: this.password };
      this.output.loginData(res).subscribe(
        (data) => {
          alert('Login Successfully');
          this.router.navigate(['table']);
        },
        (error) => {
          if (error.status === 401) {
            console.error('Invalid username or password');
          } else {
            console.error('An error occurred during login');
          }
        }
      );
    } else {
      this.errorMessage = 'Please enter a username and password.';
    }
  }
}
