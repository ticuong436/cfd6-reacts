import Baner from "./Component/Baner"
import Section2 from "./Component/Section2"
import Section3 from "./Component/Section3"
import Section4 from "./Component/Section4"

export default function CourseDetail() {
    return (
        <main className="course-detail" id="main">
            <Baner />
            <Section2 />
            <Section3 />
            <Section4 />
        </main>
    )
}