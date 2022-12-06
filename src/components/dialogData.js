import React from "react";
import "./dialogData.css";

function Welcome(props) {
  return (
    <div className="dialogCard">
      <span className="heading">
        <h2>{props.role}</h2>
      </span>

      <span>
        <p>
          <i></i>
          {props.points}
        </p>

        <p>
          <i></i>
          {props.pointsOne}
        </p>

        <p>
          <i></i>
          {props.pointsTwo}
        </p>

        <p>
          <i></i>
          {props.pointsThree}
        </p>
      </span>
    </div>
  );
}

export default function Ddata() {
  return (
    <>
      <Welcome
        points="I develop the user interface"
        pointsOne="Web page Development"
        pointsTwo="I create ux element interactions"
        pointsThree="I position your company brand"
        role="Frontend Developer"
      />
    </>
  );
}
