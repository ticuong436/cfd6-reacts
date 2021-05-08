// import MemberRegister from "./Component/MemberRegister";

import { useRef, useState } from "react"

export default function Register() {
    // let [name, setName] = useState('');
    // // let inputRef = useRef(0)
    // // console.log(inputRef);

    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        urlfb: '',
        option: ''
    });

    let [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        urlfb: ''
    })
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


        // if (!/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/.test(form.urlfb)) {
        //     errorObj.urlfb = "Facebook không đúng định dạng"
        // }
        // if (!form.option) {
        //     alert('opion')
        //     return
        // }
        setError(errorObj);
        if (Object.keys(errorObj).length === 0) {
            console.log(form);
        }

    }



    function inputOnChange(e) {

        let name = e.target.name;
        let value = e.target.value;
        setForm({
            ...form,
            [name]: value
        })
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
                                <input value={form.name} name="name" onChange={inputOnChange} type="text" placeholder="Họ và tên bạn" />
                                {
                                    error.name && <p className="error-text">{error.name}</p>
                                }
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
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
                                <p>URL Facebook<span>*</span></p>
                                <input value={form.url} name="url" onChange={inputOnChange} type="text" placeholder="https://facebook.com" />
                                {
                                    error.urlfb && <p className="error-text">{error.urlfb}</p>
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
                                <input value={form.option} name="option" onChange={inputOnChange} type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <div className="btn main rect" onClick={onSubmit} >đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
