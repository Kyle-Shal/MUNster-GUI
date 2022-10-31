import React from "react";
import './VolunteerCard.css';

function VolunteerCard({person}) {
    return (
            <div className='volunteerPostingBox'>
                <h2>{person.volunteerPosition}</h2>
                <h3>{person.volunteerPlace}</h3>
                <p>{person.volunteerOverview}</p>
                <p>{person.volunteerDates}</p>
            </div>
    );
}

export default VolunteerCard;