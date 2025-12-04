import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  registerForm: any;
  isloginView: boolean = true;
    constructor(private fb:FormBuilder , private authService:AuthService,private router:Router) {
    this.registerForm = this.fb.group({
      name:['',[Validators.required]],
     
      email:[''],
      password:[''],
      role:['']
    });
   
  
    }
  onSubmit(formdata: any) {
  console.log(formdata.value);

  this.authService.loginUser(formdata.value).subscribe({
    next: (res: any) => {
      console.log(res);
      localStorage.setItem('mytoken', JSON.stringify(res.token));
      localStorage.setItem('myuser', JSON.stringify(res.user));
      this.router.navigate(['/users']);
    },
    error: (err: any) => {
      console.error("Login Error:", err);
    },
    
  });
}


onSubmitbyformblider(formdata:any){
  console.log(formdata.value);
  this.authService.registerUser(formdata.value).subscribe({
    next: (res: any) => {
      console.log(res);
      this.isloginView = true;
    },
    error: (err: any) => {
      console.error("Login Error:", err);
    },
    
  })
}
}
