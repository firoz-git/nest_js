import {
  Controller,
  Get,
  Post,
  Delete,
  Res,
  Body,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { student } from './student.schema';
import { StudentService } from './student.service';

@Controller('students') //all the url satrt with students on stuent routing (localhost:3000/students)
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Res() response, @Body() student: student) {
    const newStudent = await this.studentService.create(student);
    return response.status(HttpStatus.CREATED).json({
      newStudent,
    });
  }

  @Get()
  async fetchAll(@Res() response) {
    const student = await this.studentService.readAll();
    return response.status(HttpStatus.OK).json({
      student,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const student = await this.studentService.readById(id);
    return response.status(HttpStatus.OK).json({
      student,
    });
  }

  @Put('/:id')
  async update(@Res() response, @Param('id') id, @Body() student: student) {
    const studentUpdated = await this.studentService.update(id, student);
    return response
      .status(HttpStatus.OK)
      .json({ updated: studentUpdated, msg: 'updated Succesfully' });
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    const studentDeleted = await this.studentService.delete(id);
    return response
      .status(HttpStatus.OK)
      .json({ studentDeleted: studentDeleted, msg: 'deleted succesfully' });
  }
}
