// src/projects/project.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop([String])
  tags: string[];

  @Prop()
  githubUrl: string;

  @Prop()
  demoUrl: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
