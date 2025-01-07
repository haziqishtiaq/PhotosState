import { Component, NgModule } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router, RouterModule } from '@angular/router';

const ADD_POST = gql`
  mutation AddPost($description: String!, $imageUrl: String!) {
    addPost(description: $description, imageUrl: $imageUrl) {
      id
      description
      imageUrl
      likes
      createdAt
    }
  }
`;

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  standalone: false
})
export class AddPostComponent {
  description: string = '';
  imageUrl: string = '';

  constructor(private apollo: Apollo, private router: Router) {}

  addPost() {
    this.apollo.mutate({
      mutation: ADD_POST,
      variables: {
        description: this.description,
        imageUrl: this.imageUrl
      }
    }).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
