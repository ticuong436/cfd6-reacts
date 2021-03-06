import { NavLink, useHistory } from 'react-router-dom'

export function Nav() {
    let history = useHistory();
    function closeNav(e) {
        document.body.classList.remove('menu-is-show')
        document.querySelector('.loading-page').style.transform = 'scale(25)';
        e.preventDefault();
        setTimeout(() => {
            history.push(e.target.href.replace(window.location.origin, ''));
            document.querySelector('.loading-page').style.transform = 'scale(0)';
        }, 1000)


    }
    return (

        <nav className="nav">
            <ul>
                <li className="li_login">
                    <a href="#">Đăng nhập</a>
                    <a href="#">Đăng ký</a>
                </li>
                <li >
                    <NavLink exact onClick={closeNav} exact to="/">Trang chủ</NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNav} to="team">CFD Team</NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNav} to="my-course">Khóa Học</NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNav} to="project">Dự Án</NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNav} to="contact">Liên hệ</NavLink>
                </li>
            </ul>
        </nav>


    )
}