import { Route } from 'react-router-dom';
import './../OtherPersonProfile.css';
import profiles from './../../data/profiles.js';
import AssociatedWith from '../AssociatedWith';

const connectionProfile = JSON.parse(localStorage.getItem("connectPerson"))

const jobSplit = "a"

const othersJobs = []

const getOthersJobs = () => {
    for (var i=0; i<profiles.length; i++) {
        othersJobs.push(profiles[i].job)
    }
}

const commonEmployer = jobSplit.at(-1)
console.log(commonEmployer)

const associatedProfiles = []

const checkAssociated = () => {
    getOthersJobs();
    othersJobs.forEach(function (job, i) {
        if (commonEmployer === job.split("at ").at(-1)) {
            associatedProfiles.push(profiles[i])
            console.log(associatedProfiles)
        }
    });

    console.log(associatedProfiles)
}

function OtherPersonProfile() {

    checkAssociated()

    const getAssociatedWith = () => {
        return <AssociatedWith associatedProfiles={associatedProfiles} commonEmployer={commonEmployer} />
    }

    return (
        <div>
            {getAssociatedWith()}
        </div>
    )
}

export default OtherPersonProfile;