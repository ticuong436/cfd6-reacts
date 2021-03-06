import React, { useState } from 'react'
import reactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import useAuth from '../hook/useAuth'
import useFormValidate from '../hook/useFormValidate'
import { loginAction } from '../redux/actions/authAction'
import Auth from '../service/auth'
export default function PopupLogin() {
    // let [loginError, setLoginError] = useState()
    let { form, error, inputChange, check } = useFormValidate({
        username: '',
        password: ''
    }, {
        rule: {
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6,
                max: 32
            }
        },

    })
    let dispath = useDispatch()
    let { loginError } = useSelector(store => store.authReducer)
    // let { handleLogin } = useAuth()
    function close() {
        document.querySelector('.popup-login').style.display = 'none'
    }

    async function loginHandle() {
        let error = check();
        if (Object.keys(error).length === 0) {
            // let res = await Auth.login({
            //     username: form.username,
            //     password: form.password
            // })
            dispath(loginAction({
                username: form.username,
                password: form.password
            }, close))
            // if (res.data) {
            //     close()
            //     // dispath({
            //     //     type: 'LOGIN',
            //     //     payload: res.data
            //     // })

            // } else if (res.error) {
            //     setLoginError(res.error)
            // }
            // if (res) {
            //     alert(res)
            // } else {
            //     // close()
            // }


        }
    }

    return reactDOM.createPortal(
        <div className="popup-form popup-login" style={{ display: 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">????ng nh???p</h2>
                    {loginError && <p className="error-text">{loginError}</p>}
                    <input type="text" value={form.username} name="username" onChange={inputChange} placeholder="Email / S??? ??i???n tho???i" />
                    {
                        error.username && <p className="error-text">{error.username}</p>
                    }
                    <input type="password" value={form.password} name="password" onChange={inputChange} placeholder="M???t kh???u" />
                    {
                        error.password && <p className="error-text">{error.password}</p>
                    }
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nh??? m???t kh???u</p>
                        </label>
                        <a href="#" className="forget">Qu??n m???t kh???u?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={loginHandle}>????ng nh???p</div>
                    <div className="text-register" style={{}}>
                        <strong>ho???c ????ng k?? b???ng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt="" />
                Google
              </div>
                    </div>
                    <div className="close" >
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
                {/* email form */}
                <div className="ct_email">
                    <h2 className="title">?????t l???i m???t kh???u</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Ti???p theo</div>
                    <div className="back" />
                    <div className="close" onClick={close}>
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )

}