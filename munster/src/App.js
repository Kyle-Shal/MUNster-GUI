import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import People from "./components/Pages/People"
import Home from "./components/Pages/Home"
import Applicants from "./components/Pages/Applicants";
import CreateJobPosting from "./components/Pages/CreateJobPosting";
import OtherPersonProfile from "./components/Pages/OtherPersonProfile";

function App() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/MUNster' element={<Home />} />
            <Route path='/MUNster/people' element={<People />} />
            <Route path='/MUNster/applicants' element={<Applicants />} />
            <Route path='/MUNster/jobpost' element={<CreateJobPosting />}/>
            <Route path='/MUNster/otherPersonProfile' element={<OtherPersonProfile />}/>
          </Routes>
        </Router>
      </>
    );
}

export default App;
