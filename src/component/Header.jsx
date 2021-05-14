import { Link } from 'react-router-dom'
export function Header() {
    function menuOpen() {
        document.body.classList.toggle('menu-is-show')
    }
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={menuOpen}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" className="logo">
                        <img src="img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        <div className="have-login">
                            <div className="account">
                                <a href="#" className="info">
                                    <div className="name">Trần Lê Trọng Nghĩa</div>
                                    <div className="avatar">
                                        <img src="img/avt.png" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <Link to="/profile">Khóa học của tôi</Link>
                                <Link to="/profile">Thông tin tài khoản</Link>
                                <Link to="/">Đăng xuất</Link>
                            </div>
                        </div>
                        {/* <div class="not-login bg-none">
                            <Link to="/login">Đăng nhập</Link>
                            <Link to="/register" class="btn main btn-open-login">Đăng ký</Link>
                        </div> */}
                    </div>
                </div>
            </header>
            <div class="overlay_nav" onClick={menuOpen}></div>
        </>
    )
}