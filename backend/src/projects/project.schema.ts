import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop()
  githubUrl: string;

  @Prop()
  demoUrl: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
