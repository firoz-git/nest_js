import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { student, StudentDocument } from './student.schema';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async create(student: student): Promise<student> {
    const newStudent = new this.studentModel(student);
    return newStudent.save();
  }

  async readAll(): Promise<student[]> {
    return await this.studentModel.find().exec();
  }

  async readById(id): Promise<student> {
    return await this.studentModel.findById(id).exec();
  }

  async update(id, student: student): Promise<student> {
    return await this.studentModel.findByIdAndUpdate(id, student, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.studentModel.findByIdAndRemove(id);
  }
}
