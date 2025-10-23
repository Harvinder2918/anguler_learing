import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  obs = new Observable((observer) => {
    observer.next('test1');
    observer.complete();
  });

  constructor() {
    this.obs.subscribe((data) => {
      console.log(data);
    });
  }
}


