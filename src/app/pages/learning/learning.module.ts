import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecylehookComponent } from './lifecylehook/lifecylehook.component';
import { RouterModule } from '@angular/router';
import { LearningmainComponent } from './learningmain/learningmain.component';
import { ParentComponent } from './datapassing/parent/parent.component';
import { ChildComponent } from './datapassing/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearningCardsComponent } from './learningmain/learning-cards/learning-cards.component';
import { AngulerFormsComponent } from './anguler-forms/anguler-forms.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';

const routes = [
  {path: '', component: LearningmainComponent},
  { path: 'lifecycle-hooks', component: LifecylehookComponent },
  { path: 'data-passing', component: ParentComponent },
  {path:'anguler-fomrs', component:AngulerFormsComponent},
  {path:'anguler-directives', component:DirectivesComponent},
  {path:'anguler-pipes', component:PipesComponent},

]

@NgModule({
  declarations: [
    LifecylehookComponent,
    LearningmainComponent,
    ParentComponent,
    ChildComponent,
    LearningCardsComponent,
    AngulerFormsComponent,
    DirectivesComponent,
    PipesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LearningModule { }
