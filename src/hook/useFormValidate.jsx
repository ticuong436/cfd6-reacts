import { useState } from "react";

export default function useFormValidate(initialForm, validate) {
    let [form, setForm] = useState(initialForm)
    let [error, setError] = useState({})

    function inputChange(e) {

        let name = e.target.name;
        let value = e.target.value;
        setForm({
            ...form,
            [name]: value
        })
    }


    function check() {
        let errorObj = {}
        let { rule } = validate
        for (let i in rule) {
            let r = rule[i]
            if (r.required && !form[i]) {
                errorObj[i] = 'Trường này không được để trống'
            }
        }
        // if (!form.name.trim()) {
        //     errorObj.name = "Bạn chưa nhập họ và tên"

        // }
        // if (!form.phone) {
        //     errorObj.phone = "Vui lòng nhập số điện thoại"
        // } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
        //     errorObj.phone = "Số điện thoại không đúng định dạng"
        // }

        // if (!form.email) {
        //     errorObj.email = "Vui lòng nhập Email"
        // } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
        //     errorObj.email = "Email không đúng định dạng"
        // }
        setError(errorObj)
        return errorObj
    }

    return (
        form,
        error,
        inputChange,
        check
    )
}