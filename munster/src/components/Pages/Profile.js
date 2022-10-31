import React from 'react';
import ProfilePage from "../ProfilePage";
import yourProfile from '../../data/yourProfile';

function Profile() {
  return (
    <>
    <ProfilePage person={yourProfile}/>
    </>
  );
}

export default Profile;