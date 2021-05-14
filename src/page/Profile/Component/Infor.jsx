import { useState, useReducer } from "react"
import useFormValidate from "../../../hook/useFormValidate"
function reducer(state, action) {

    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.payload
                }
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }


    }
    return state;


}
export default function Infor() {

    // let [state, dispath] = useReducer(reducer, {
    //     form: {
    //         name: '',
    //         phone: '',
    //         email: '',
    //         urlfb: '',
    //         skype: ''

    //     },
    //     error: {
    //         name: '',
    //         phone: '',
    //         email: '',
    //         urlfb: '',
    //         skype: ''
    //     }
    // })
    let { form, inputChange, error, check } = useFormValidate({
        name: '',
        phone: '',
        email: '',
        urlfb: '',
        skype: ''
    }, {})




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
                <input value={form.urlfb} name="urlfb" onChange={inputChange} type="text" placeholder="Facebook url" />

                {
                    error.urlfb && <p className="error-text">{error.urlfb}</p>
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