import React from "react";
import { HashRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home/index";
import Quotes from "./components/Quotes/index";
import Profile from './components/Profile/index'
import MeetGeorge from './components/MeetGeorge/index'
import MeetGeorgeImage from './components/MeetGeorgeImage/index'
import MeetGeorgeText from './components/MeetGeorgeText/index'
import CareerObjectives from './components/CareerObjectives/index'
import About from './components/About/index'
import Footer from './components/Footer/index'
import Contact from './components/Contact/index'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Home />
        <Quotes />
        <MeetGeorge/>
        <CareerObjectives/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
