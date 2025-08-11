import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './project.schema';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }
}
