import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-post', component: AddPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [BrowserModule ,RouterModule]
})
export class AppRoutingModule {}
