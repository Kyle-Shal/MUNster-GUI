import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import People from "./components/Pages/People"
import Home from "./components/Pages/Home"
import Applicants from "./components/Pages/Applicants";
import Login from "./components/Pages/Login";

function App() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/MUNster' element={<Home />} />
            <Route path='/MUNster/people' element={<People />} />
            <Route path='/MUNster/applicants' element={<Applicants />} />
            <Route path='/MUNster/login' element={<Login />} />
          </Routes>
        </Router>
      </>
    );
}

export default App;
