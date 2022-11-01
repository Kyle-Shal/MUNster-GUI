import {react, useState} from "react";
import "./JobApplication.css"
import DocumentUpload from './FormComponents/DocumentUpload'
import PersonalDetails from './FormComponents/PersonalDetails'
import PriorExperience from './FormComponents/PriorExperience'
import './JobApplication.css'
import { useLocation } from 'react-router-dom';


function JobApplication() {
    const location = useLocation()
    const {jobDetails} = location.state
    const [page, setPage] = useState(0);
    const titles = ["Upload Documents", "Personal Details", "Prior Experience"]
    const formDisplay = () => {
        if (page == 0) {
            return <DocumentUpload />
        } else if (page == 1) {
            return <PersonalDetails />
        } else {
            return <PriorExperience />
        }
        
    }
    return (
        <div className='main' >
            <h1>
                {jobDetails.jobTitle}
            </h1>
            <div className='sections_container' >
                <div className="form" >
                    <h1 className="title"> {titles[page]} </h1>
                    <div className="body">
                        {formDisplay()}
                    </div>
                    <div className="btn">
                        <button 
                        className="progress_button"
                        onClick={() => {setPage((currPage) => currPage - 1)}}
                        disabled={page==0}>
                            Previous
                        </button>
                        
                        <button 
                            className="progress_button"
                            onClick={() => {setPage((currPage) => currPage + 1)}}
                            disabled={page==2}>
                                Next
                        </button>
                        {/* <renderButton({page}) /> */}
                        
                    </div>
                    
                </div>
                <div className="progress_bar" >
                    <h1 className="title"> Progress </h1>
                    <ul >
                        <li className='progress_bar_list'>
                            <h2> Upload Documents </h2>
                        </li>
                        <li className='progress_bar_list'>
                            <h2> Personal Details </h2>
                            <label className="entry_header_side" htmlFor="name"> First Name </label>
                            <br/>
                            <label className="entry_header_side" htmlFor="last_name"> Last Name </label>
                            <br/>
                            <label className="entry_header_side" htmlFor="email"> Email </label>
                            <br/>
                            <label className="entry_header_side" htmlFor="phone_number"> Phone Number </label>
                            <br/>
                            <label className="entry_header_side" htmlFor="address"> Address </label>
                            {/* <h3 className="medium_text_side"> Full Name </h3>
                            <h3 className="medium_text_side"> Email </h3>
                            <h3 className="medium_text_side"> Phone Number </h3>
                            <h3 className="medium_text_side"> Address </h3> */}
                        </li>
                        <li className='progress_bar_list'>
                            <h2> Prior Experience </h2>
                            <label className="entry_header_side" htmlFor="job_experience"> Job Experience </label>
                            <br/>
                            <label className="entry_header_side" htmlFor="volunteer_experience"> Volunteer Experience </label>
                            <br/>
                        </li>
                        <div className="progress_btn">
                            <button className="progress_button">
                                Save Changes
                            </button>
                            <button className="progress_button">
                                Submit
                            </button>
                        </div>
                        
                        
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default JobApplication;