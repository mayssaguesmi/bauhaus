import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  postId: string; // L'identifiant de l'article auquel le commentaire est associé

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
