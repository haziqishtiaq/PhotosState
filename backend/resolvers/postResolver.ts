import Post from '../models/Post';

const postResolver = {
  Query: {
    posts: async () => await Post.find().sort({ createdAt: -1 }),
  },
  Mutation: {
    addPost: async (_: any, args: { description: string; imageUrl: string }) => {
      const { description, imageUrl } = args;
      const newPost = new Post({ description, imageUrl });
      return await newPost.save();
    },
    likePost: async (_: any, args: { id: string }) => {
      const { id } = args;
      const post = await Post.findById(id);
      if (post) {
        post.likes += 1;
        return await post.save();
      }
      throw new Error('Post not found');
    }
  }
};

export default postResolver;
