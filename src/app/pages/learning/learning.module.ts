import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecylehookComponent } from './lifecylehook/lifecylehook.component';
import { RouterModule } from '@angular/router';
import { LearningmainComponent } from './learningmain/learningmain.component';
import { ParentComponent } from './datapassing/parent/parent.component';
import { ChildComponent } from './datapassing/child/child.component';
import { FormsModule } from '@angular/forms';
import { LearningCardsComponent } from './learningmain/learning-cards/learning-cards.component';
import { AngulerFormsComponent } from './anguler-forms/anguler-forms.component';

const routes = [
  {path: '', component: LearningmainComponent},
  { path: 'lifecycle-hooks', component: LifecylehookComponent },
  { path: 'data-passing', component: ParentComponent },
  {path:'anguler-fomrs', Component:AngulerFormsComponent}
]

@NgModule({
  declarations: [
    LifecylehookComponent,
    LearningmainComponent,
    ParentComponent,
    ChildComponent,
    LearningCardsComponent,
    AngulerFormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class LearningModule { }
