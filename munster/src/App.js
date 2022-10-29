import React from "react";
import Search from './components/Search';
import profiles from "./data/profiles";
//import applicants from "./data/applicants";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
    return (
        //<Search details={applicants} type="applicant"/>
        <>
        <Router>
            <NavBar />
            <Search details={profiles} type="profile"/>
        </Router>
        </>
    );
}

export default App;
