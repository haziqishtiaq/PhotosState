import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList, GraphQLSchema } from 'graphql';
import postResolver from '../resolvers/postResolver';

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    likes: { type: GraphQLInt },
    createdAt: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    posts: {
      type: new GraphQLList(PostType),
      resolve: postResolver.Query.posts
    },
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPost: {
      type: PostType,
      args: {
        description: { type: GraphQLString },
        imageUrl: { type: GraphQLString }
      },
      resolve: (_: any, args: any) => postResolver.Mutation.addPost(_, args)
    },
    likePost: {
      type: PostType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: (_: any, args: any) => postResolver.Mutation.likePost(_, args)
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});