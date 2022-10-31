import React from "react";
import yourProfile from "../data/yourProfile";
import { Link } from "react-router-dom";
import "./ProfileCreation.css";

function ProfileCreation(){
    return(
    <div className="whiteBox">
        <div className="insideBox">
          <div >
            <p className="titles"> Email </p>
            <br></br>
            <input className="inputs"></input>
            <br></br>
            <p className="titles"> First Name </p>
            <br></br>
            <input className="inputs"></input>
            <br></br>
            <p className="titles"> Address (line 1) </p>
            <br></br>
            <input className="inputs"></input>
            <br></br>
            <p className="titles"> Province/State </p>
            <br></br>
            <input className="inputs"></input>

          </div>
        </div>
        
        <div className="insideBox">
          <div >
            <p className="titles"> Password </p>
            <br></br>
            <input className="inputs"></input>
            <br></br>
            <p className="titles"> Last Name </p>
            <br></br>
            <input className="inputs"></input>
            <br></br>
            <p className="titles"> Address Line 2 (Apartment/ Suite Number) </p>
            <br></br>
            <input className="inputs"></input>
            <br></br>
            <p className="titles"> Country </p>
            <br></br>
            <input className="inputs"></input>
          </div>
        </div>

        <div className="jobExperienceBox">
            <p className="experienceTitles">Job Experience</p>
            <div className="insideExperienceBox">
                <p className="titles"> Company Name </p>
                <br></br>
                <input className="experienceInputs"></input>
                <br></br>
                <p className="titles"> Start Date </p>
                <br></br>
                <input className="experienceInputs"></input>
                <br></br>
                <p className="titles"> Job Description </p>
                <br></br>
                <input className="descriptionInputs"></input>
            </div>
            <div className="insideExperienceBox">
                <p className="titles"> Company Address</p>
                <br></br>
                <input className="experienceInputs"></input>
                <br></br>
                <p className="titles"> End Date </p>
                <br></br>
                <input className="experienceInputs"></input>
            </div>
        </div>

        <div className="volunteerExperienceBox">
            <p className="experienceTitles">Volunteer Experience</p>
            <br></br>
            <div className="insideExperienceBox">
                <p className="titles"> Organization Name </p>
                <br></br>
                <input className="experienceInputs"></input>
                <br></br>
                <p className="titles"> Start Date </p>
                <br></br>
                <input className="experienceInputs"></input>
                <br></br>
                <p className="titles"> Overview </p>
                <br></br>
                <input className="descriptionInputs"></input>
            </div>
            <div className="insideExperienceBox">
                <p className="titles"> Organization Address</p>
                <br></br>
                <input className="experienceInputs"></input>
                <br></br>
                <p className="titles"> End Date </p>
                <br></br>
                <input className="experienceInputs"></input>
            </div>
        </div> 

        <div className="educationBox">
            <p className="experienceTitles">Education</p>
            <br></br>
            <div className="insideExperienceBox">
                <p className="titles"> School Name </p>
                <br></br>
                <input className="experienceInputs"></input>
                <br></br>
                <p className="titles"> Start Date </p>
                <br></br>
                <input className="experienceInputs"></input>
                <br></br>
                <p className="titles"> Program Name </p>
                <br></br>
                <input className="descriptionInputs"></input>
            </div>
            <div className="insideExperienceBox">
                <p className="titles"> School Address</p>
                <br></br>
                <input className="experienceInputs"></input>
                <br></br>
                <p className="titles"> End Date </p>
                <br></br>
                <input className="experienceInputs"></input>
            </div>
        </div> 
        <button type="Submit" className="submitButton"><Link to="/MUNster/profile">Submit</Link></button>
    </div>
    )
}

export default ProfileCreation;