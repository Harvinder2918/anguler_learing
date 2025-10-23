import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-learning-cards',
  templateUrl: './learning-cards.component.html',
  styleUrls: ['./learning-cards.component.scss']
})
export class LearningCardsComponent {
@Input() cardData: any;
}
