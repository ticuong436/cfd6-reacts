import { useState } from "react"

export default function Cooperate() {
    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: ''

    })
    let [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: ''
    })

    function inputOnChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setForm({
            ...form,
            [name]: value
        })
    }
    function onSubmit() {
        let errorObj = {}

        if (!form.name.trim()) {
            errorObj.name = "Bạn chưa nhập họ và tên"
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


        if (!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(form.website)) {
            errorObj.website = "Website không đúng định dạng"
        }

        setError(errorObj);
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
                        <input value={form.name} name="name" onChange={inputOnChange} type="text" placeholder="Họ và tên bạn" />
                        {
                            error.name && <p className="error-text">{error.name}</p>
                        }
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <input value={form.phone} name="phone" onChange={inputOnChange} type="text" placeholder="Số điện thoại" />
                        {
                            error.phone && <p className="error-text">{error.phone}</p>
                        }

                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <input value={form.email} name="email" onChange={inputOnChange} type="text" placeholder="Email của bạn" />
                        {
                            error.email && <p className="error-text">{error.email}</p>
                        }
                    </label>
                    <label>
                        <p>Website</p>
                        <input value={form.website} name="website" onChange={inputOnChange} type="text" placeholder="Đường dẫn website http://" />
                        {
                            error.website && <p className="error-text">{error.website}</p>
                        }
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input value={form.title} name="title" onChange={inputOnChange} type="text" placeholder="Tiêu đề liên hệ" />
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