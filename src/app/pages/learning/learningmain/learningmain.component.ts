import { Component } from '@angular/core';

@Component({
  selector: 'app-learningmain',
  templateUrl: './learningmain.component.html',
  styleUrls: ['./learningmain.component.scss']
})
export class LearningmainComponent {
 cards = [
  {
    name: "lifecycle hook",
    description: "Welcome to the Learning Main Component!",
    route: "lifecycle-hooks"
  },
  {
    name: "blogs",
    description: "This is another column in the Learning Main Component!",
    route: "/blog"
  },
  {
    name: "Data Passing",
    description: "This is yet another column in the Learning Main Component!",
    route: "data-passing"
  },
  {
    name: "Anguler forms",
    description: "This is yet another column in the Learning Main Component!",
    route: "anguler-fomrs"
  },
   {
    name: "Anguler Directives",
    description: "This is yet another column in the Learning Main Component!",
    route: "anguler-directives"
  },
   {
    name: "Anguler Pipes",
    description: "This is yet another column in the Learning Main Component!",
    route: "anguler-pipes"
  }
  ,
   {
    name: "User-curd",
    description: "This is yet another column in the Learning Main Component!",
    route: "/users"
  }
];

}
