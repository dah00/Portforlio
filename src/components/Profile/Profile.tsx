import React from "react";
import "./profile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


function Profile() { 
  return (
    <div className="profile-container flex flex-col gap-y-5 items-center justify-center">
      <img src="./prof_pic.jpeg" alt="profile" className="profile-image" />
      <h2 className="text-2xl">Obeda Velonjatovo</h2>
      <div className="row">
        <div className="col">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>
        </div>
        <div className="col">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
