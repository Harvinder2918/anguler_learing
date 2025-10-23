import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecylehook',
  templateUrl: './lifecylehook.component.html',
  styleUrls: ['./lifecylehook.component.scss']
})
export class LifecylehookComponent {
 ngOnChanges() {
    console.log('ngOnChanges called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
