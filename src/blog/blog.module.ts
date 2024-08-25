// src/blog/blog.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from './blog.schema';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { User, UserSchema } from 'src/User/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),],
  
  providers: [BlogService,JwtService,AuthService],
  controllers: [BlogController],
})
export class BlogModule {}
