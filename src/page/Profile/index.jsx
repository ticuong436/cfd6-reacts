import Infor from "./Component/Infor"
import MyCourse from "./Component/MyCourse"
import ProfileProject from "./Component/ProfileProject"
import Lib from "./Component/Lib"
import Coin from "./Component/Coin"
import { useState, useContext } from "react"
import { Context } from '../../App'
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import TopInfor from "./Component/TopInfor"
import { useSelector } from "react-redux"

export default function Profile() {

    let { path } = useRouteMatch()

    let { login } = useSelector(store => store.authReducer)


    return (
        <main className="profile" id="main">
            <section>
                <TopInfor />
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