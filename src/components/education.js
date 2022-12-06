import React from "react";
import "./education.css";

export default function Education() {
  const qualification = [
    {
      id: 0,
      course: "Computer Engineer",
      institute: "Peru - University",
      years: `2009-2014`,
      calendarIcon: "./image/calendar-alt.svg",
      course2: null,
      institute2: null,
      years2: null,
      calendarIcon2: null,
    },
    {
      id: 1,
      course: null,
      institute: null,
      years: null,
      calendarIcon: null,
      course2: "Web Design",
      institute2: "Spain - institute",
      years2: `2014-2017`,
      calendarIcon2: "./image/calendar-alt.svg",
    },
    {
      id: 2,
      course: "Web Development",
      institute: "Peru - Institute",
      years: `2017-2019`,
      calendarIcon: "./image/calendar-alt.svg",
      course2: null,
      institute2: null,
      years2: null,
      calendarIcon2: null,
    },
    {
      id: 3,
      course: null,
      institute: null,
      years: null,
      calendarIcon: null,
      course2: "Master in UI/UX",
      institute2: "Peru - Institute",
      years2: `2019-2021`,
      calendarIcon2: "./image/calendar-alt.svg",
    },
  ];
  return (
    <>
      <div className="gen-edu" id="yeh" >
        {qualification.map((info, i) => (
          <div key={info.id} className="qualification-category">
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
