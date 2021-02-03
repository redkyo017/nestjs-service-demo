import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  getCourses() {
    return this.coursesService.getCourses();
  }

  @Get(':courseId')
  getCourse(@Param('courseId') courseId) {
    return this.coursesService.getCourse(courseId);
  }

  @Post()
  addCourse(@Body() course: {}) {
    return this.coursesService.addCourse(course);
  }

  @Put(':courseId')
  updateCourse(@Param('courseId') courseId, @Body() course: {}) {
    return this.coursesService.updateCourse(courseId, course);
  }

  @Delete()
  deleteCourses(@Query() query) {
    return this.coursesService.deleteCourse(query.courseId);
  }
}
