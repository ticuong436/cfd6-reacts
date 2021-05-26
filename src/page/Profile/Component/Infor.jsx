import { useState, useReducer } from "react"
import { useDispatch, useSelector } from "react-redux"
import useFormValidate from "../../../hook/useFormValidate"
import { loginAction, updateAction } from "../../../redux/actions/authAction"
import authReducer from "../../../redux/reducer/coutReducer"
import Auth from "../../../service/auth"

export default function Infor() {

    let dispath = useDispatch()
    let { login } = useSelector(store => store.authReducer)
    let { form, inputChange, error, check } = useFormValidate({
        name: login.name,
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
                pattern: /^(?:http(s)?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/i
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



    const [success, setSuccess] = useState()
    async function Save() {
        let errorObj = check()
        if (Object.keys(errorObj).length === 0) {
            console.log(form);
            dispath(updateAction(form))

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
                <input name="email" onChange={inputChange} value={form.email} placeholder="abc@gmail.com" type="text" />
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