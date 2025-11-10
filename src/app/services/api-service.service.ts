import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})



export class ApiServiceService {

apiurl = enviroment.backendUrl;

  constructor(private http: HttpClient) { }
  getposts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getpostsbyid(id:any){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  getuser(){
    return this.http.get(this.apiurl+'/users')
  }
  deleteUser(id:any){
    return this.http.delete(this.apiurl+`/users/${id}`);
  }
  postUser(data:any){
    return this.http.post(this.apiurl+'/users', data);
  }
  getUserById(id:any){
    return this.http.get(this.apiurl+`/users/${id}`);
  }
  updateUser(id:any, data:any){
    return this.http.put(this.apiurl+`/users/${id}`, data);
  }
}
