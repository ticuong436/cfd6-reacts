import { useState, useReducer } from "react"
import useFormValidate from "../../../hook/useFormValidate"

export default function Infor() {

    let { form, inputChange, error, check } = useFormValidate({
        name: '',
        phone: '',
        email: '',
        url: '',
        skype: ''
    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            url: {
                required: true,
                pattern: /^(?:http(s)?:\/\/)?www.facebook.com\/\/[\w.-]+$/i
            },

        },
        message: {
            name: {
                required: 'Họ và tên không được để trống'
            },
            phone: {
                required: 'Số điênh thoại không được để trống',
                pattern: 'Phải là số điện thoại Việt Nam'
            },
            url: {
                required: 'Link FB không được để trống',
                pattern: 'Đây không phải là Link FaceBook'
            }
        }
    })




    function Save() {

        let errorObj = check()
        if (Object.keys(errorObj).length === 0) {
            console.log(form);
        }
    }

    return (
        <div className="tab1">
            <label>
                <p>Họ và tên<span>*</span></p>
                <input value={form.name} name="name" onChange={inputChange} type="text" placeholder="Nguyễn Văn A" />
                {
                    error.name && <p className="error-text">{error.name}</p>
                }
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input value={form.phone} name="phone" onChange={inputChange} type="text" placeholder="0949******" />
                {
                    error.phone && <p className="error-text">{error.phone}</p>
                }
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input name="email" onChange={inputChange} value="vuong.dang@dna.vn" disabled type="text" />
                {
                    error.email && <p className="error-text">{error.email}</p>
                }
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input value={form.url} name="url" onChange={inputChange} type="text" placeholder="Facebook url" />

                {
                    error.url && <p className="error-text">{error.url}</p>
                }
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input value={form.skype} name="skype" onChange={inputChange} type="text" placeholder="Skype url" />
                {
                    error.skype && <p className="error-text">{error.skype}</p>
                }
            </label>
            <div className="btn main rect" onClick={Save}>LƯU LẠI</div>
        </div>
    )
}