import { Route } from 'react-router-dom';
import './OtherPersonProfile.css';
import AssociatedPeopleCard from './AssociatedPeopleCard.js';
import { useState } from 'react';

function AssociatedWith({associatedProfiles, commonEmployer}) {

    const [asscProfiles, setAsscProfiles] = useState(associatedProfiles);
    const [commonEmp, setCommonEmp] = useState(commonEmployer)

    const filtered = asscProfiles.map(person => <AssociatedPeopleCard key={person.id} person={person} />);

    return (
        <div className="mainAssociationBox">
            <h3 className="otherPeopleLine">Other people associated with:</h3>
            <p className="employerLine">{commonEmp}</p>
            <div className='associationBoxPink'>{filtered}</div>
        </div>
    )
}

export default AssociatedWith;