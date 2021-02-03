import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  getCourses(): Promise<any> {
    return new Promise(resolve => {
      resolve('many courses');
    });
  }

  getCourse(courseId): Promise<any> {
    return new Promise(resolve => {
      resolve(`course with id: ${courseId} was found`);
    });
  }

  addCourse(course): Promise<any> {
    return new Promise(resolve => {
      const bodystring = JSON.stringify(course)
      resolve(`added new course with body : ${bodystring}`);
    });
  }

  updateCourse(courseId, course): Promise<any> {
      console.log("con meo", courseId)
    return new Promise(resolve => {
      resolve(`course with id: ${courseId} has been successfully updated`);
    });
  }

  deleteCourse(courseId): Promise<any> {
    return new Promise(resolve => {
      resolve(`course with id: ${courseId} has been successfully deleted`);
    });
  }
}
