import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
function App() {
  return (
     <HashRouter>
    <div className="App">
    <NavBar/>
      <h1>This is my site</h1>
    </div>
    </HashRouter>
  );
}

export default App;
