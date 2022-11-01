import {react, useState} from "react";
import '../JobApplication.css'


function PriorExperience() {
    const [jobList, setJobList] = useState([{ job: ""}]);
    const [volunteerList, setVolunteerList] = useState([{ volunteer: ""}]);
    console.log(jobList);
    console.log(volunteerList);
    const handleJobAdd = () => {
        setJobList([...jobList, {job: ""}])
    }

    const handleJobDelete = (index) => {
        const list = [...jobList];
        list.splice(index, 1);
        setJobList(list)
    }

    const handleJobChange = (e, index) => {
        const { name, value} = e.target; 
        const list = [...jobList];
        list[index][name] = value;
        setJobList(list)
    }

    const handleVolunteerAdd = () => {
        setVolunteerList([...volunteerList, {volunteer: ""}])
    }

    const handleVolunteerDelete = (index) => {
        const list = [...volunteerList];
        list.splice(index, 1);
        setVolunteerList(list)
    }

    const handleVolunteerChange = (e, index) => {
        const { name, value} = e.target; 
        const list = [...volunteerList];
        list[index][name] = value;
        setVolunteerList(list)
    }

    const focusLabel = (labelId) => {
        document.querySelector("[for=" + labelId + "]").style.color = "#8b0000"
        document.querySelector("[for=" + labelId + "]").style.textDecoration = "underlined"
        document.querySelector("[for=" + labelId + "]").style.fontWeight = "550"
    }

    const blurLabel = (labelId) => {
        document.querySelector("[for=" + labelId + "]").style.color = "black"
        document.querySelector("[for=" + labelId + "]").style.textDecoration = ""
        document.querySelector("[for=" + labelId + "]").style.fontWeight = ""
    }

    return(
        <div className="form_container">
            <div className="prev_experience">
                <div className="header">
                    <h3 className="input_header"> Job Experience </h3>
                    <button className="add" onClick={handleJobAdd}> 
                    Add
                    </button>
                </div>
                <div className="input_container">
                {jobList.map((singleJob, index) => (
                    <div className="experience" key={index}>
                        <div className="experience_input">
                            <textarea className="input_box" 
                            id="job" 
                            onFocus={() => focusLabel("job")}
                            onBlur={() => blurLabel("job")}
                            name="job" 
                            value={singleJob.job}
                            onChange= {(e) => handleJobChange(e, index)}
                            required />
        
                        </div>
                        {jobList.length > 1 && (
                        <button className="remove" onClick={() => handleJobDelete(index)}>
                            Remove
                        </button>
                    )}
                    </div> 
                ))} 
                </div>
                
            </div>
            <div className="prev_experience">
                <div className="header">
                    <h3 className="input_header"> Volunteer Experience </h3>
                    <button className="add" onClick={handleVolunteerAdd}> 
                    Add
                    </button>
                </div>
                <div className="input_container">
                    {volunteerList.map((singleVolunteer, index) => (
                        <div className="experience" key={index}>
                            <div className="">
                                {/* <textarea></textarea> */}
                                <textarea className="input_box" 
                                id="volunteer" 
                                onFocus={() => focusLabel("volunteer")}
                                onBlur={() => blurLabel("volunteer")}
                                name="volunteer" 
                                required 
                                value={singleVolunteer.job}  
                                onChange= {(e) => handleVolunteerChange(e, index)}/>
                            </div>
                            {volunteerList.length > 1 && (
                                <button className="remove" onClick={() => handleVolunteerDelete(index)}>
                                Remove
                                </button>
                            )}
                        </div>
                ))}
                </div>
                
            </div>
            
        </div>
    );
}

export default PriorExperience;