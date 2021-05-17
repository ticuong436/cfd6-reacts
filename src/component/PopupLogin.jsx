import React from 'react'
import reactDOM from 'react-dom'

import useAuth from '../hook/useAuth'
import useFormValidate from '../hook/useFormValidate'
export default function PopupLogin() {
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
    let { handleLogin } = useAuth()
    function close() {
        document.querySelector('.popup-login').style.display = 'none'
    }

    function loginHandle() {
        let error = check();
        if (Object.keys(error).length === 0) {
            let res = handleLogin(form.username, form.password)
            if (res) {
                alert(res)
            } else {
                close()
            }


        }
    }

    return reactDOM.createPortal(
        <div className="popup-form popup-login" style={{ display: 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    <input type="text" value={form.username} name="username" onChange={inputChange} placeholder="Email / Số điện thoại" />
                    {
                        error.username && <p className="error-text">{error.username}</p>
                    }
                    <input type="password" value={form.password} name="password" onChange={inputChange} placeholder="Mật khẩu" />
                    {
                        error.password && <p className="error-text">{error.password}</p>
                    }
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={loginHandle}>đăng nhập</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
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
                    <h2 className="title">Đặt lại mật khẩu</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Tiếp theo</div>
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