import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit  {
 blogs:any[] = []

 constructor( private api : ApiServiceService , private router: Router) {
    console.log('Constructor called');
  }
  
 
  ngOnInit() {
    console.log('ngOnInit called');
    console.log(this.api.getposts());
    this.api.getposts().subscribe((res:any)=>{
      console.log(res);
      this.blogs=res;
      
    });
    
  }
  viewblog(id:any){
  this.router.navigate(['/blogdetail', id]); // URL will be /user/5
  }

 
}
