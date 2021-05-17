import { CourselItem, Footer, Header, Nav } from "./component";
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./page/home";

import Project from "./page/Projectpage";
import Team from "./page/Team";
import Pay from "./page/Pay";
import Register from "./page/Register";
import Profile from "./page/Profile";
import Faq from "./page/Faq";
import CourseDetail from "./page/Course-detail";
import Error from "./page/404";
import Email from "./page/Email"
import Coin from "./page/IntroCoin";
import './assets/style/custom.scss'
import Cooperate from "./page/Cooperate";
import PopupLogin from "./component/PopupLogin"
import Course from "./page/Course"
import PrivateRouter from './component/PrivateRouter'
export let Context = React.createContext({})

function App() {

  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem('login'))
  })

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(state.login))
  }, [state.login])

  function handleLogin(username, password) {
    if (username === 'admin@gmail.com' && password === '123456') {
      setState({
        ...state,
        login: {
          name: 'Đặng Thuyền Vương',
          avatar: '/img/avt.png'
        }
      })

    } else {
      return 'Sai thông tin đăng nhập'
    }
  }
  function handleLogout() {
    setState({
      ...state,
      login: false
    })
    localStorage.setItem('login', false)
  }

  return (
    <Context.Provider value={{ ...state, handleLogin, handleLogout }}>
      <BrowserRouter>
        <Header />
        <Nav />
        <PopupLogin />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/team' component={Team} />
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/course-detail' component={CourseDetail} />
          <Route path='/pay' component={Pay} />
          <Route path='/register' component={Register} />
          <Route path='/project' component={Project} />
          <Route path='/faq' component={Faq} />
          <Route path='/email' component={Email} />
          <PrivateRouter path='/contact' component={Cooperate} />
          <Route path='/coin' component={Coin} />
          <Route path='/course' component={Course} />
          <Route path='/' component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App;
