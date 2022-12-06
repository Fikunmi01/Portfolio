import React from "react";
import Ddata from "./dialogData";
import { data } from "./serviceData";
import "./services.css";

export default function Services() {
  const [dialog, setDialog] = React.useState(false);

  const handleDialog = (id) => {
    setDialog(id !== dialog ? id : null);
  };

  return (
    <>
      <div className="services">
        <div className="header">
          <h2>Services</h2>
          <p>What I Offer</p>

          {data.map((e, i) => (
            <div key={e.id}>
              <div className="card">
                <span>
                  <img src={e.iconImg} alt="icon img" />
                  <h3>{e.jobRole}</h3>

                  {dialog === data.id ? (
                    <i
                      onClick={() => {
                        handleDialog(data.id);
                      }}
                      style={{ cursor: "pointer" }}
                      className="uil uil-times"
                    ></i>
                  ) : (
                    <a
                      onClick={() => {
                        handleDialog(data.id);
                      }}
                    >
                      View More
                      <img id="arrow" src={e.arrowIcon} alt="arrow icon" />
                    </a>
                  )}
                </span>
              </div>
            </div>
          ))}

          {dialog === data.id && (
            <>
              <Ddata />
            </>
          )}
        </div>
      </div>
    </>
  );
}
