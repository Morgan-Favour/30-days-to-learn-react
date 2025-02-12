import React from "react";
import "../App.css";

function Profile(props) {
  return (
    <>
      <div className="card">
        <img className="card-image" src={props.img} alt={props.name} />
        <div className="card-info">
          <h1 className="card-name">{props.name}</h1>
          <p>Phone: {props.phoneNumber}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
