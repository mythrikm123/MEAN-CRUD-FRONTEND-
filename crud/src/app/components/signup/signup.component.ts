import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableserviceService } from 'src/app/services/tableservice.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: any;
  output: any;
  password: any;
  email: any;
  repeatpassword: any;
  formSubmitted = false;
  errorMessage = '';

  constructor(private router: Router, private result: TableserviceService) {
    this.output = result;
  }
  res: any;
  data: any;
  show: boolean = false;
  //password show 
  togglePasswordVisibility() {
    this.show = !this.show;
  }

  //sign up logic
  signup() {
    //form validation
    this.formSubmitted = true;
    if (!this.username || !this.email || !this.password || !this.repeatpassword) {
      this.errorMessage = 'Please enter all fields.';
      return;
    }
    if (this.password !== this.repeatpassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }
    const signupData = {
      username: this.username,
      password: this.password,
      email: this.email,
      repeatpassword: this.repeatpassword,
    };

    this.output.postData(signupData).subscribe(
      (response: { message: any }) => {
        console.log(response.message);
        alert('Registered successfuly')
        this.router.navigate(['table']);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 400) {
          console.log('Password and repeat password do not match. Please try again.');
        } else {
          console.log('An error occurred:', error.message);
        }
      }
    );
  }
}
