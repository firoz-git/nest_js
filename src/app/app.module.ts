import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { student, StudentSchema } from 'src/student/student.schema';
import { StudentService } from 'src/student/student.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/demo'),
    MongooseModule.forFeature([{ name: student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}
