import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div className="profile-container flex flex-col items-center justify-center">
      <img
        src="./prof_pic.jpeg"
        alt="profile"
        className="h-auto max-w-full rounded-full"
      />
      <h2>Obeda Velonjatovo</h2>
    </div>
  );
}

export default Profile;
