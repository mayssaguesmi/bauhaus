// src/blog/blog.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
