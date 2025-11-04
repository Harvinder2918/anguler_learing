import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { MyformtestComponent } from './pages/myformtest/myformtest.component';
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'learning', loadChildren: () => import('./pages/learning/learning.module').then(m => m.LearningModule) },
   { path: 'users', loadChildren: () => import('./pages/users/users/users.module').then(m => m.UsersModule) },
  { path: 'myform', component: MyformtestComponent },
  { path: 'blogdetail/:id', component: BlogdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
