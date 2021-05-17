import { useState } from "react"
import useFormValidate from "../../hook/useFormValidate"
export default function Cooperate() {
    let { form, inputChange, error, check } = useFormValidate({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: ''
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
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            },
            website: {
                required: true,
                pattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i
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
            website: {
                required: 'Link Website không được để trống',
                pattern: 'Đây không phải là Link Website'
            },
            email: {
                required: 'Email không được để trống',
                pattern: 'Địa chỉ Email không đúng'
            },

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
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
                <div className="form">
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input value={form.name} name="name" onChange={inputChange} type="text" placeholder="Họ và tên bạn" />
                        {
                            error.name && <p className="error-text">{error.name}</p>
                        }
                    </label>
                    <label>
                        <p>Số điện thoại</p>
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
                        <p>Website</p>
                        <input value={form.website} name="website" onChange={inputChange} type="text" placeholder="Đường dẫn website http://" />
                        {
                            error.website && <p className="error-text">{error.website}</p>
                        }
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input value={form.title} name="title" onChange={inputChange} type="text" placeholder="Tiêu đề liên hệ" />
                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea name="content" id cols={30} rows={10} defaultValue={""} />
                    </label>
                    <div className="btn main rect" onClick={onSubmit}>đăng ký</div>
                </div>
            </section>
        </main>
    )
}