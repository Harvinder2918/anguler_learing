import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() dataC!: string;
@Output() dataC2: EventEmitter<string> = new EventEmitter();
  
}
