import { CourselItem, Footer, Header, Nav } from "./component";

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


function App() {
  return (
    <BrowserRouter>


      <Header />
      <Nav />

      <PopupLogin />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/team' component={Team} />
        <Route path='/profile' component={Profile} />
        <Route path='/course-detail' component={CourseDetail} />
        <Route path='/pay' component={Pay} />
        <Route path='/register' component={Register} />
        <Route path='/project' component={Project} />
        <Route path='/faq' component={Faq} />
        <Route path='/email' component={Email} />
        <Route path='/contact' component={Cooperate} />
        <Route path='/coin' component={Coin} />
        <Route path='/login' component={PopupLogin} />
        <Route path='/course' component={Course} />
        <Route path='/' component={Error} />


      </Switch>
      <Footer />




    </BrowserRouter>
  )
}

export default App;
