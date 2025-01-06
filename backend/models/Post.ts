import { Schema, model } from 'mongoose';

interface IPost {
  description: string;
  imageUrl: string;
  likes: number;
  createdAt: Date;
}

const PostSchema = new Schema<IPost>({
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default model<IPost>('Post', PostSchema);