import {CourseWrapper, ListItem, Title,  } from "./styles";
import { LessonsData } from "./data";
import { v4 } from "uuid";

function Course() {
const lessons = LessonsData.map((lesson: string)=> {
  return <ListItem key={v4()}>{lesson}</ListItem>
})

  return (
    <CourseWrapper>
      <Title>React Lessons</Title>
      {lessons}
    </CourseWrapper>
  )
}

export default Course;
