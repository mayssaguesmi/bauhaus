// src/blog/blog.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './blog.schema';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async createBlog(blogData: Partial<Blog>): Promise<Blog> {
    const newBlog = new this.blogModel(blogData);
    return newBlog.save();
  }

  async getAllBlogs(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  async getBlogById(_id: string): Promise<Blog> {
    console.log(_id)
    const blog =  this.blogModel.findById(_id).exec();
    console.log(blog)
    return blog
  }

  async updateBlog(id: string, updateData: Partial<Blog>): Promise<Blog | null> {
    return this.blogModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async deleteBlog(id: string): Promise<Blog | null> {
    return this.blogModel.findByIdAndDelete(id).exec();
  }
}
