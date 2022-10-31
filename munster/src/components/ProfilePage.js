import React from "react";
import "./Profile.css";
import JobExperienceCard from "./JobExperienceCard";
import VolunteerCard from "./VolunteerCard";
import EducationCard from "./EducationCard";

function ProfilePage({person}) {
    return (
        <div>
            <img className='profilePicture' alt={person.name} src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg" />
            <div className='box'>
                <button className="edit"></button>
                <div className='description'>
                    <center>
                        <p className='header'>{person.name}</p>
                        <p className='jobDes'>{person.job}</p>
                    </center>
                </div>
                <br></br>
                <br></br>
                <div className="experienceBoxes">
                    <p className="Title">Job Experience</p>
                    <JobExperienceCard person={person}/> 
                </div>
                <br></br>
                <br></br>
                <div className="experienceBoxes">
                    <p className="Title">Volunteer Work </p> 
                    <VolunteerCard person={person}/>
        
                </div>
                <br></br>
                <br></br>
                <div className="experienceBoxes">
                    <p className="Title">Education </p> 
                    <EducationCard person={person}/>
        
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;