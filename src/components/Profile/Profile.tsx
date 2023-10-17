import React from "react";
import "./profile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


function Profile() { 
  return (
    // flex flex-col gap-y-9 items-center
    <div className="profile-container d-flex flex-column align-items-center gap-5">
      <h1>Welcome to my Portfolio :)</h1>
      <div className="profile-intro d-flex gap-5">
        <img src="./prof_pic.jpeg" alt="profile" className="profile-image p-2 g-col-6" />
        <div className="profile-info d-flex flex-column align-items-center gap-3">
          <h5>I'm </h5>
          <h2><span className="text-info">Obe</span>da Velonjatovo</h2>
          <h4>Frontend Developer</h4>
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-3">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>
            </div>
            <div className="col-3">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </div>
            <div className="col-6">  
              <button className="resume">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
