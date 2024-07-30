
import React from "react";


{/* Member Card for team members with a picture and bio content*/}
const MemberCard = ({ name, role, bio, photo }) => {
  return (
    <div className="col-md-6 custom-card">
        <div className="card shadow">
            <img src={photo} className="w-100 border-bottom card-image" alt=""/>
            <div className="card-body">
                <h5>{name}</h5>
                <h6>{role}</h6>
                <div className="underline"></div>
                <p>{bio}</p>
            </div>
        </div>
    </div>
  );
};

export default MemberCard;