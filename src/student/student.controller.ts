import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller('students') //all the url satrt with students on stuent routing (localhost:3000/students)
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('5756') //here it is the id for getting single user details
  getStudentById() {
    return {
      name: 'firos',
      age: 23,
    };
  }

  @Post('create')
  createStudent() {
    return 'student created';
  }

  @Delete('remove')
  removeStudent() {
    return 'student deleted';
  }
}
