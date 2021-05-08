import { useState } from "react"

export default function Infor() {
    let [form, setFrom] = useState({
        name: '',
        phone: '',
        email: '',
        urlfb: '',
        skype: ''

    })

    let [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        urlfb: '',
        skype: ''
    })

    function inputOnChange(e) {
        let name = e.target.name;
        let value = e.target.value
        setFrom({
            ...form,
            [name]: value
        })
    }

    function Save() {

        let errorObj = {}
        if (!form.name) {
            errorObj.name = "Vui lòng nhập họ và tên"
        }
        if (!form.phone) {
            errorObj.phone = "Vui lòng nhập số điện thoại"
        } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
            errorObj.phone = "Số điện thoại không đúng định dạng"
        }

        if (!form.email) {
            errorObj.email = "Vui lòng nhập Email"
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
            errorObj.email = "Email không đúng định dạng"
        }

        setError(errorObj);
        if (Object.keys(errorObj).length === 0) {
            console.log(form);
        }
    }
    return (
        <div className="tab1">
            <label>
                <p>Họ và tên<span>*</span></p>
                <input value={form.name} name="name" onChange={inputOnChange} type="text" placeholder="Nguyễn Văn A" />
                {
                    error.name && <p className="error-text">{error.name}</p>
                }
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input value={form.phone} name="phone" onChange={inputOnChange} type="text" placeholder="0949******" />
                {
                    error.phone && <p className="error-text">{error.phone}</p>
                }
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input name="email" onChange={inputOnChange} value="vuong.dang@dna.vn" disabled type="text" />
                {
                    error.email && <p className="error-text">{error.email}</p>
                }
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input value={form.urlfb} name="urlfb" onChange={inputOnChange} type="text" placeholder="Facebook url" />

                {
                    error.urlfb && <p className="error-text">{error.urlfb}</p>
                }
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input value={form.skype} name="skype" onChange={inputOnChange} type="text" placeholder="Skype url" />
                {
                    error.skype && <p className="error-text">{error.skype}</p>
                }
            </label>
            <div className="btn main rect" onClick={Save}>LƯU LẠI</div>
        </div>
    )
}