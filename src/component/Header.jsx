import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import useAuth from '../hook/useAuth'
import { logoutAction } from '../redux/actions/authAction'

export function Header({ }) {
    function menuOpen() {
        document.body.classList.toggle('menu-is-show')
    }
    function popupLogin() {
        document.querySelector('.popup-login').style.display = 'flex'
    }
    let { login } = useSelector(store => store.authReducer)
    let dispath = useDispatch()
    function logout(e) {
        e.preventDefault()
        dispath(
            logoutAction()
        )
    }
    // let { login, handleLogout } = useAuth()
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
                                    <Link to="/my-course">Kh??a h???c c???a t??i</Link>
                                    <Link to="profile">Th??ng tin t??i kho???n</Link>
                                    <Link to="/" onClick={logout}>????ng xu???t</Link>
                                </div>
                            </div> :
                                <div class="not-login bg-none">
                                    <Link to="/" onClick={popupLogin}>????ng nh???p</Link>
                                    <Link to="/register" class="btn main btn-open-login">????ng k??</Link>
                                </div>
                        }

                    </div>
                </div>
            </header>
            <div class="overlay_nav" onClick={menuOpen}></div>
        </>
    )
}