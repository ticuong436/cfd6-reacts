import { CourselItem, Footer, Header, Nav } from "./component";
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'

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
import myCourse from "./page/myCourse"
import PrivateRouter from './component/PrivateRouter'
import Auth from "./service/auth";
import store from "./redux";
import MyCourse from "./page/myCourse";


export let Context = React.createContext({})

function App() {



  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem('login'))
  })

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(state.login))
  }, [state.login])

  async function handleLogin(username, password) {
    try {
      let res = await Auth.login({ username, password })

      if (res.data) {
        setState({
          ...state,
          login: res.data
        })
        return {
          success: true
        }
      } else if (res.error) {
        return {
          error: res.error
        }
      }
    } catch (error) {

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
    <Provider store={store}>
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
            <Route path='/course-detail/:slug' component={CourseDetail} />
            <Route path='/pay' component={Pay} />
            <PrivateRouter path='/register/:slug' component={Register} />
            <Route path='/project' component={Project} />
            <Route path='/faq' component={Faq} />
            <Route path='/email' component={Email} />
            <PrivateRouter path='/contact' component={Cooperate} />
            <Route path='/coin' component={Coin} />
            <Route path='/my-course' component={MyCourse} />
            <Route path='/' component={Error} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </Provider>
  )
}

export default App;
