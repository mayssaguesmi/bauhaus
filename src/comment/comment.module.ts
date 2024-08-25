import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './comment.schema';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { User, UserSchema } from 'src/User/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [CommentService,JwtService,AuthService],
  controllers: [CommentController],
})
export class CommentModule {}
