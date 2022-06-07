import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = student & Document;

@Schema()
export class student {
  @Prop()
  name: string;

  @Prop()
  roll: number;

  @Prop()
  mobile: number;

  @Prop()
  address: string;
}

export const StudentSchema = SchemaFactory.createForClass(student);
