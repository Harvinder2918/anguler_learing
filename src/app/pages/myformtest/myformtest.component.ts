import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myformtest',
  templateUrl: './myformtest.component.html',
  styleUrls: ['./myformtest.component.scss']
})
export class MyformtestComponent {
 regis: FormGroup;
 constructor(private fb:FormBuilder){
  this.regis = this.fb.group({
    name:[''],
    lname:[''],
    email:[''],
    phone:[''],
    dob:[new Date()],
    password:[''],
    gender:[''],
    Address:[''],


  })

 };
 submit(frondata:any){
  console.log(frondata.value)
 }
}
