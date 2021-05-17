
import { useRef, useState } from "react"
import useFormValidate from "../../hook/useFormValidate"

export default function Register() {

    let { form, inputChange, error, check } = useFormValidate({
        name: '',
        phone: '',
        email: '',
        url: '',
        option: ''

    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            email: {
                required: true,
                pattern: 'email'
            },
            url: {
                required: true,
                pattern: /^(?:http(s)?:\/\/)?www.facebook.com\/\/[\w.-]+$/i

            },
            option: {
                required: true
            },

        },
        message: {
            name: {
                required: 'Họ và tên không được để trống'
            },
            phone: {
                required: 'Số điện thoại không được để trống',
                pattern: 'Phải là số điện thoại Việt Nam'
            },
            email: {
                required: 'Email không được để trống',
                pattern: 'Địa chỉ Email không đúng'
            },
            url: {
                required: 'Link FB không được để trống',
                pattern: 'Đây không phải là Link FaceBook'
            }


        }
    })

    function onSubmit() {
        let errorObj = check()
        if (Object.keys(errorObj).length === 0) {
            console.log(form);
        }

    }

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input value={form.name} name="name" onChange={inputChange} type="text" placeholder="Họ và tên bạn" />
                                {
                                    error.name && <p className="error-text">{error.name}</p>
                                }
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input value={form.phone} name="phone" onChange={inputChange} type="text" placeholder="Số điện thoại" />
                                {
                                    error.phone && <p className="error-text">{error.phone}</p>
                                }
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input value={form.email} name="email" onChange={inputChange} type="text" placeholder="Email của bạn" />
                                {
                                    error.email && <p className="error-text">{error.email}</p>
                                }
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input value={form.url} name="url" onChange={inputChange} type="text" placeholder="https://facebook.com" />
                                {
                                    error.url && <p className="error-text">{error.url}</p>
                                }
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input value={form.option} name="option" onChange={inputChange} type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <div className="btn main rect" onClick={onSubmit} >đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
