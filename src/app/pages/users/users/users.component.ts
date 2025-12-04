import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any = [];
  constructor(private apiserves : ApiServiceService){

  }
ngOnInit(): void {
  this.getUsers();
}
delUser(id:any){
  this.apiserves.deleteUser(id).subscribe(res=>{
    console.log(res)
    this.getUsers()
  })
}
getUsers(){
  this.apiserves.getuser().subscribe(res=>{
    console.log(res);
    this.users=res
  })
}
}
