import React from "react";
import './Card.css';

function Card({person}) {
    return (
        <div className='profileBox'>
            <img className="profilePic" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
            <div className="name">
                <h2>{person.name}</h2>
                <h4>{person.job}</h4>
            </div>
            <button className="connect">Connect</button>
        </div>
    );
}

export default Card;