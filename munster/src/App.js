import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import People from "./components/Pages/People"
import Home from "./components/Pages/Home"
import Applicants from "./components/Pages/Applicants";
import JobDetails from "./components/Pages/JobDetails";
import JobApplication from "./components/JobApplication"

function App() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='MUNster' element={<Home />} />
            <Route path='/MUNster/people' element={<People />} />
            <Route path='/MUNster/applicants' element={<Applicants />} />
            <Route path='/MUNster/jobs/details' element={<JobDetails />} />
            <Route path='/MUNster/jobs/apply' element={<JobApplication />}/>
          </Routes>
        </Router>

      </>
    );
}

export default App;
