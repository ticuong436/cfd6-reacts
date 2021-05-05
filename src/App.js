import { Footer, Header, Nav } from "./component";


import Home from "./page/home"
import Project from "./page/Projectpage";
import Team from "./page/team";
import Pay from "./page/Pay";
import Register from "./page/Register";
import Profile from "./page/Profile";
import Faq from "./page/Faq";



function App() {
  return <div className="App">
    <Header />
    <Nav />
    <Faq />
    <Footer />
  </div>;
}

export default App;
