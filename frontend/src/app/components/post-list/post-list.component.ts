import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      description
      imageUrl
      likes
      createdAt
    }
  }
`;

const LIKE_POST = gql`
  mutation LikePost($id: ID!) {
    likePost(id: $id) {
      id
      likes
    }
  }
`;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery({
      query: GET_POSTS
    }).valueChanges.subscribe((result: any) => {
      this.posts = result?.data?.posts;
    });
  }

  likePost(id: string) {
    this.apollo.mutate({
      mutation: LIKE_POST,
      variables: { id }
    }).subscribe();
  }
}