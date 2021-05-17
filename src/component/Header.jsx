import { Link } from 'react-router-dom'

import useAuth from '../hook/useAuth'

export function Header({ }) {
    function menuOpen() {
        document.body.classList.toggle('menu-is-show')
    }
    function popupLogin() {
        document.querySelector('.popup-login').style.display = 'flex'
    }
    let { login, handleLogout } = useAuth()
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
                        {
                            login ? <div className="have-login">
                                <div className="account">
                                    <a href="#" className="info">
                                        <div className="name">{login.name}</div>
                                        <div className="avatar">
                                            <img src={login.avatar} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <Link to="/course">Khóa học của tôi</Link>
                                    <Link to="/profile">Thông tin tài khoản</Link>
                                    <Link to="/" onClick={e => { e.preventDefault(); handleLogout() }}>Đăng xuất</Link>
                                </div>
                            </div> :
                                <div class="not-login bg-none">
                                    <Link to="/" onClick={popupLogin}>Đăng nhập</Link>
                                    <Link to="/register" class="btn main btn-open-login">Đăng ký</Link>
                                </div>
                        }

                    </div>
                </div>
            </header>
            <div class="overlay_nav" onClick={menuOpen}></div>
        </>
    )
}