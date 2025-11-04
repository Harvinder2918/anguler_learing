import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
interface Blog{
  title:string,
  body:string ,
  userId:any
}
@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {
  blog:Blog = {
    title : '',body: '',userId:""
  }
api = inject(ApiServiceService);
 route = inject(ActivatedRoute)
ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
  console.log('User ID:', id);
 this.api.getpostsbyid(id).subscribe((res:any)=>{
      console.log(res);
      this.blog=res;
      
    });


}

}
