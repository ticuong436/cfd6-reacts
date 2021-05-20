import React, { useEffect, useState } from "react";
import { CourselItem } from "../../component";
import CourseApi from "../../service/course";
import CourseList from '../home/component/CourseList'

// import { CourseItem } from "../../../component"


export default function MyCourse() {
    const [course, setCourse] = useState()
    useEffect(async () => {
        let res = await CourseApi.list(course)
        setCourse(res)
    }, [])
    console.log(course);

    return (
        <CourseList {...course} />
    )
}