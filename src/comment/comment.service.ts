import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './comment.schema';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

  async createComment(commentData: Partial<Comment>): Promise<Comment> {
    const newComment = new this.commentModel(commentData);
    return newComment.save();
  }

  async getCommentsByPost(postId: string): Promise<Comment[]> {
    console.log(`Fetching comments for postId: ${postId}`);
    const comments = await this.commentModel.find({ postId }).exec();
    console.log(`Comments found: ${JSON.stringify(comments)}`);
    return comments;
  }
  
  // Autres méthodes pour manipuler les commentaires, comme la suppression, etc.
}
