import React from "react";
import Header from "../../assets/images/Header.jpg";
import "./Home.css";
import NavBar from '../NavBar/index'
import Profile from '../Profile/index'

const Home = () => {
  return (
    <div className="Header">
     <NavBar/>
     <Profile/>
    </div>
  );
};
export default Home;
