import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div className="profile-container flex flex-col gap-y-5 items-center justify-center">
      <img src="./prof_pic.jpeg" alt="profile" className="profile-image" />
      <h2 className="text-2xl">Obeda Velonjatovo</h2>
      <div className="link">
        {/* linkin
        insta
        git */}
      </div>
    </div>
  );
}

export default Profile;
