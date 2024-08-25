import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { Project } from './portfolio.schema';
import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';
import { RolesGuard } from 'src/auth/RolesGuard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('projects')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

 @UseGuards(JwtAuthGuard, RolesGuard)
 
  @Post()
  @Roles('admin')
  create(@Body() project: Project): Promise<Project> {
    return this.portfolioService.createProject(project);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() project: Partial<Project>): Promise<Project> {
    return this.portfolioService.updateProject(id, project);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.portfolioService.deleteProject(id);
  }

  @Get()
  findAll(): Promise<Project[]> {
    return this.portfolioService.getAllProjects();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Project> {
    return this.portfolioService.getProjectById(id);
  }
}
