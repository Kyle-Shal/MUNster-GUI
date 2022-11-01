import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import People from "./components/Pages/People"
import Home from "./components/Pages/Home"
import Applicants from "./components/Pages/Applicants";
<<<<<<< HEAD
import JobDetails from "./components/Pages/JobDetails";
import JobApplication from "./components/JobApplication"
=======
import Login from "./components/Pages/Login";
import Creation from "./components/Pages/Creation";
import Profile from "./components/Pages/Profile";
>>>>>>> a79b194eeae36ee2ee22f42318ca68dc18569131

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
<<<<<<< HEAD
            <Route path='/MUNster/jobs/details' element={<JobDetails />} />
            <Route path='/MUNster/jobs/apply' element={<JobApplication />}/>
=======
            <Route path='/MUNster/login' element={<Login />} />
            <Route path='/MUNster/createProfile' element={<Creation/>} />
            <Route path="/MUNster/profile" element={<Profile/>} />
>>>>>>> a79b194eeae36ee2ee22f42318ca68dc18569131
          </Routes>
        </Router>

      </>
    );
}

export default App;
