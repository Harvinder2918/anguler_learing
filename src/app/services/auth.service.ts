import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiUrl = enviroment.backendUrl;
 constructor(private http: HttpClient) { }
   loginUser(data:any){
    return this.http.post(this.apiUrl+'/auth/login', data);
  }
   registerUser(data:any){
    console.log(this.apiUrl+'/auth/register', data);
    return this.http.post(this.apiUrl+'/auth/register', data);
  }
}
