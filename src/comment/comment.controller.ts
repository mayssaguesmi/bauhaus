import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.schema';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('create')
  async createComment(@Body() commentData: Partial<Comment>): Promise<Comment> {
    return this.commentService.createComment(commentData);
  }

  @Get('post/:postId')
  async getCommentsByPost(@Param('postId') postId: string): Promise<Comment[]> {
    return this.commentService.getCommentsByPost(postId);
  }

  // Autres endpoints pour manipuler les commentaires
}
