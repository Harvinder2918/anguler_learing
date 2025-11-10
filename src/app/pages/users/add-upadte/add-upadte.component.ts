import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-upadte',
  templateUrl: './add-upadte.component.html',
  styleUrls: ['./add-upadte.component.scss']
})
export class AddUpadteComponent {
 myForm!: FormGroup;

  constructor(private fb: FormBuilder ,private apiService: ApiServiceService , private router: Router , private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
    
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.getUserById(userId);
    }
  }
  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Data:', this.myForm.value);
      const userId = this.route.snapshot.paramMap.get('id');
      if (userId) {
        this.updateUser(userId, this.myForm.value);
      } else {
        this.addUser(this.myForm.value);
      }
    } else {
      console.log('Form Invalid');
      this.myForm.markAllAsTouched();
    }
  }

  addUser(user:any){
    this.apiService.postUser(user).subscribe({
      next: (response) => {
        console.log('User added successfully:', response);
        this.myForm.reset();
        this.router.navigate(['/users']);
      },
      error: (error) => {
        console.error('Error adding user:', error);
      }
    }); 
  }
  getUserById(id:any){
    this.apiService.getUserById(id).subscribe({
      next: (response) => {
        console.log('User data:', response);
        this.myForm.patchValue(response);
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
    }); 
  }
  updateUser(id:any, user:any){
    this.apiService.updateUser(id, user).subscribe({
      next: (response) => {
        console.log('User updated successfully:', response);
        this.myForm.reset();
        this.router.navigate(['/users']);
      },
      error: (error) => {
        console.error('Error updating user:', error);
      }
    }); 
  }
  adduserWithimage(file:File){
    const formData = new FormData();
    formData.append('name', this.myForm.get('name')?.value);
    formData.append('email', this.myForm.get('email')?.value);
    formData.append('role', this.myForm.get('role')?.value);
    formData.append('password', this.myForm.get('password')?.value);
    formData.append('image', file, file.name);
  }
  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      this.adduserWithimage(file);
    }
  }
}
