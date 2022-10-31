import React from "react";
import './JobExperienceCard.css';

function JobExperienceCard({person}) {
    return (
            <div className='jobExperiencePostingBox'>
                <h2>{person.previousJob}</h2>
                <h3>{person.previousJobPlace}</h3>
                <p>{person.previousJobDescription}</p>
                <p>{person.previousJobDates}</p>
            </div>
    );
}

export default JobExperienceCard;