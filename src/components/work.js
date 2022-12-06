import React from "react";
import "./education.css";

export default function Education() {
  const qualification = [
    {
      course: "Web Developer Intern",
      institute: "Meta Inc.",
      years: `2009-2011`,
      calendarIcon: "./image/calendar-alt.svg",
      course2: null,
      institute2: null,
      years2: null,
      calendarIcon2: null,
    },
    {
      course: null,
      institute: null,
      years: null,
      calendarIcon: null,
      course2: " Frontend Developer",
      institute2: "Handrai Llc.",
      years2: `2011-2016`,
      calendarIcon2: "./image/calendar-alt.svg",
    },
    {
      course: "Freelance Developer",
      institute: "Fiverr",
      years: `2016-2020`,
      calendarIcon: "./image/calendar-alt.svg",
      course2: null,
      institute2: null,
      years2: null,
      calendarIcon2: null,
    },
    {
      course: null,
      institute: null,
      years: null,
      calendarIcon: null,
      course2: "Frontend Developer",
      institute2: "ABc Inc.",
      years2: `2019-Present`,
      calendarIcon2: "./image/calendar-alt.svg",
    },
  ];
  return (
    <>
      <div className="gen-edu">
        {qualification.map((info, i) => (
          <div className="qualification-category">
            <div className="slot1">
              <h3 className="course">{info.course}</h3>

              <p className="institution">{info.institute}</p>

              <p className="date-completed">
                <img id="calendarIcon" src={info.calendarIcon} /> {info.years}
              </p>
            </div>

            <div className="slot2">
              <h3 className="course">{info.course2}</h3>

              <p className="institution">{info.institute2}</p>

              <p className="date-completed">
                <img className="calendarIcon" src={info.calendarIcon2} />{" "}
                {info.years2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
