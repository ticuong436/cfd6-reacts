import { useEffect, useState } from "react";
import { CourselItem } from "../../component";
import CourseApi from "../../service/course";

import Action from "./component/Action";

import Banner from "./component/Baner"
import CourserList from "./component/CourseList"
import Different from "./component/Different";
import Gallery from "./component/Gallery";
import Testimonial from "./component/Testimonial";
// import CourseList from "./component/CourseList"
export default function Home() {
    let [list, setList] = useState({
        offline: [],
        online: []
    })
    useEffect(() => {
        CourseApi.list()
            .then(res => {
                setList(res)
                console.log(res);
            })
    }, [])
    return (
        <main className="homepage" id="main">
            <Banner />
            <CourserList {...list} />
            <Different />

            <Testimonial />
            <Gallery />
            <Action />
        </main>
    )
}