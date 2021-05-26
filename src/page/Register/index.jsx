
import { useContext, useEffect, useRef, useState } from "react"
import { Redirect, useParams } from "react-router"
import { Context } from "../../App"
import useFormValidate from "../../hook/useFormValidate"
import Auth from "../../service/auth"
import CourseDetailApi from "../../service/courseDetail"

import FormRegister from "./component/formRegister"
export default function Register() {

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
        <FormRegister  {...detail?.data} />

    )
}
