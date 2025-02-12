import React from "react";

function Car(props) {
  return (
    <div>
      <h1>
        I am a {props.color} {props.brand} Car
      </h1>
    </div>
  );
}

export default Car;
