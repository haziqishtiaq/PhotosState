import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostListComponent } from './components/post-list/post-list.component';


export const routes: any = [
  { path: '', component: PostListComponent },
  { path: 'add', component: AddPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }