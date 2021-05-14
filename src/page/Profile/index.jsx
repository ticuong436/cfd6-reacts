import Infor from "./Component/Infor"
import MyCourse from "./Component/MyCourse"
import ProfileProject from "./Component/ProfileProject"
import Lib from "./Component/Lib"
import Coin from "./Component/Coin"
import { useState } from "react"
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Profile() {

    let { path } = useRouteMatch()



    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink exact to={`${path}`}>Thông tin tài khoản</NavLink>
                            <NavLink to={`${path}/my-course`} >Khóa học của bạn</NavLink>
                            <NavLink to={`${path}/projcet`}>Dự án đã làm</NavLink>
                            <NavLink to={`${path}/lib`} >Lịch sử thanh toán</NavLink>
                            <NavLink to={`${path}/coin`} >Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Switch>
                                <Route exact path={`${path}`} component={Infor} />
                                <Route path={`${path}/my-course`} component={MyCourse} />
                                <Route path={`${path}/projcet`} component={ProfileProject} />
                                <Route path={`${path}/lib`} component={Lib} />
                                <Route path={`${path}/coin`} component={Coin} />
                            </Switch>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}