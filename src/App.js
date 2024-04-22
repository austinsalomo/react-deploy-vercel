import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Dispensables from "./components/pages/dispensables";
import change from "./components/pages/change-preventer";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/dispensables" Component={Dispensables} />
          <Route path="/change-preventer" Component={change} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
