import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Route, Router, RouterModule } from '@angular/router';
import { AddUpadteComponent } from '../add-upadte/add-upadte.component';

const route = [
  {path:'',component: UsersComponent},
  {path:'add-update',component: AddUpadteComponent},
   {path:'edit/:id',component: AddUpadteComponent},  

]

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
     RouterModule.forChild(route),
  ]
})
export class UsersModule { }
