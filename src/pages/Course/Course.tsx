import { CourseItem, CourseList, CourseTitle, CourseWrapper, Title } from "./styles";

function Course() {
  return (
    <CourseWrapper>
      <Title>React Lessons</Title>
      <CourseTitle>You will learn</CourseTitle>
      <CourseList>
        <CourseItem>How to create and nest components</CourseItem>
        <CourseItem>How to add markup and styles</CourseItem>
        <CourseItem>How to display data</CourseItem>
        <CourseItem>How to render conditions and lists</CourseItem>
        <CourseItem>How to respond to events and update the screen</CourseItem>
        <CourseItem>How to share data between components</CourseItem>
      </CourseList>
    </CourseWrapper>
  )
}

export default Course;
