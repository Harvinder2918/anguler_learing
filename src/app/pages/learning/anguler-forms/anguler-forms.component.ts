import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anguler-forms',
  templateUrl: './anguler-forms.component.html',
  styleUrls: ['./anguler-forms.component.scss']
})
export class AngulerFormsComponent {
  registerForm : FormGroup;
  registerForm2 : FormGroup;
  constructor(private fb:FormBuilder ){
  this.registerForm = this.fb.group({
    name:['',[Validators.required]],
    lname:[''],
    email:[''],
    password:[''],
    adress:['']
  });
  this.registerForm2= new FormGroup({
       name:new FormControl(''),
       lname:new FormControl('',[Validators.required]),
    
  })


  }
onSubmitbyformblider(formdata:any){
  console.log(formdata.value);
  
}
onSubmit(formdata:any){
  console.log(formdata.value);
  
}
onSubmitbynonformblider(formdata:any){
  console.log(formdata.value);
  
}

}
