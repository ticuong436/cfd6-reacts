import Baner from "./Component/Baner"
import Request from "./Component/Request"
import Course from "./Component/Course"
import CourseList from "./Component/CourseList"


export default function CourseDetail() {
    return (
        <main className="course-detail" id="main">
            <Baner />
            <Request />
            <Course />
            <CourseList />
        </main>
    )
}