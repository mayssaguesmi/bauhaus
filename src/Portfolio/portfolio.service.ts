import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './portfolio.schema';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Project.name)
    private projectModel: Model<ProjectDocument>,
  ) {}

  createProject(project: Project): Promise<Project> {
    const newProject = new this.projectModel(project);
    return newProject.save();
  }

  async updateProject(id: string, project: Partial<Project>): Promise<Project> {
    return this.projectModel.findByIdAndUpdate(id, project, { new: true }).exec();
  }

  async deleteProject(id: string): Promise<void> {
    await this.projectModel.findByIdAndDelete(id).exec();
  }

  getAllProjects(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

  getProjectById(id: string): Promise<Project> {
    return this.projectModel.findById(id).exec();
  }
}
