import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop({ enum: ['admin', 'user'], default: 'user' }) // Définissez les rôles possibles
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
