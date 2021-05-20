import Baner from "./Component/Baner"
import Request from "./Component/Request"
import Course from "./Component/Course"
import CourseList from "./Component/CourseList"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import CourseDetailApi from '../../service/courseDetail'

export default function CourseDetail() {
    let { slug } = useParams()

    const [detail, setDetail] = useState()
    useEffect(async () => {
        let res = await CourseDetailApi.list(slug)
        if (res) {
            setDetail(res)
        }
    }, [slug])
    console.log('detail :>> ', detail);
    return (
        <main className="course-detail" id="main">
            <Baner {...detail?.data} />
            <Request {...detail?.data} />
            <Course {...detail?.data} />
            <CourseList {...detail?.data} />
        </main>
    )
}