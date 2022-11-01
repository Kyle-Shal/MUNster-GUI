import React from "react";
import "./Profile.css";
import JobExperienceCard from "./JobExperienceCard";
import VolunteerCard from "./VolunteerCard";
import EducationCard from "./EducationCard";

function ProfilePage() {
    const createdProfile = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        province: "",
        country: "",
        companyName: "",
        jobStartDate: "",
        jobEndDate: "",
        jobDescription: "",
        companyAddress: "",
        volunteerOrgName: "",
        volunteerStartDate: "",
        volunteerEndDate: "",
        volunteerOverview: "",
        volunteerOrgAddress: "",
        schoolName: "",
        schoolStartDate: "",
        schoolEndDate: "",
        schoolAddress: "",
        programName: "",
    };

     if (localStorage.getItem("CreatedProfile 1")) {
        var currentProfile = JSON.parse(localStorage.getItem("CreatedProfile 1"));
        for (var entry in currentProfile) {
             createdProfile[entry] = currentProfile[entry];
        }
     }
    else{
        alert("youre in the else");
    }
    

    return (

        <div>
            <img className='profilePicture' alt={createdProfile.firstName} src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg" />
            <div className='box'>
                <button className="edit"></button>
                <div className='description'>
                    <center>
                        <p className='header'>{createdProfile.firstName}</p>
                        <p className='jobDes'>{createdProfile.jobDescription}</p>
                    </center>
                </div>
                <br></br>
                <br></br>
                <div className="experienceBoxes">
                    <p className="Title">Job Experience</p>
                    <JobExperienceCard person={createdProfile}/> 
                </div>
                <br></br>
                <br></br>
                <div className="experienceBoxes">
                    <p className="Title">Volunteer Work </p> 
                    <VolunteerCard person={createdProfile}/>
        
                </div>
                <br></br>
                <br></br>
                <div className="experienceBoxes">
                    <p className="Title">Education </p> 
                    <EducationCard person={createdProfile}/>
        
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;