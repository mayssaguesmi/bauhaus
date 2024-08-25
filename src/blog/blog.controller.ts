// src/blog/blog.controller.ts
import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.schema';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async createBlog(@Body() blogData: Partial<Blog>): Promise<Blog> {
    return this.blogService.createBlog(blogData);
  }

  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.getAllBlogs();
  }

  @Get(':_id')
  async getBlogById(@Param('_id') _id: string): Promise<Blog | null> {
    return this.blogService.getBlogById(_id);
  }

  @Put(':id')
  async updateBlog(@Param('id') id: string, @Body() updateData: Partial<Blog>): Promise<Blog | null> {
    return this.blogService.updateBlog(id, updateData);
  }

  @Delete(':id')
  async deleteBlog(@Param('id') id: string): Promise<Blog | null> {
    return this.blogService.deleteBlog(id);
  }
}
