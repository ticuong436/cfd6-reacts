
import { useContext, useEffect, useRef, useState } from "react"
import { Redirect, useParams } from "react-router"
import { Context } from "../../App"
import useFormValidate from "../../hook/useFormValidate"
import Auth from "../../service/auth"

import FormRegister from "./component/formRegister"
export default function Register() {

    let { slug } = useParams()

    const [register, setRegister] = useState()
    useEffect(async () => {
        let res = await Auth.register(slug)
        if (res) {
            setRegister(res)
        }
    }, [slug])
    console.log(register);

    return (
        <FormRegister {...register} />

    )
}
