import { CourselItem } from "../../component";
import Action from "./component/Action";

import Banner from "./component/Baner"
import CourserList from "./component/CourseList"
import Different from "./component/Different";
import Gallery from "./component/Gallery";
import Testimonial from "./component/Testimonial";
// import CourseList from "./component/CourseList"
export default function Home() {
    return (
        <main className="homepage" id="main">
            <Banner />
            <CourserList />
            <Different />

            <Testimonial />
            <Gallery />
            <Action />
        </main>
    )
}