import React, { useState } from "react";
import Calendarr from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = (props) => {
  const [value, onChange] = useState(new Date());

  function clicky() {
    console.log("in function");
  }

  function setAppt() {
    console.log(value);
    const choice = window.confirm(
      `Please confirm your appointment choice for ${value}`
    );
    if (value < Date.now) {
      window.alert("Selected date is out of range");
    } else {
      if (choice) {
        console.log("the thing is done");
        //reroute to home page, send confirmation email
      } else {
        console.log("the thing is not done");
        //return to select date
      }
    }
  }

  return (
    <div>
      <Calendarr
        onChange={onChange}
        value={value}
        onClick={clicky()}
        showNeighboringMonth={false}
      />
      {props.availability ? (
        <div>
          <h2>Available Appointments</h2>
          {props.availability.map((time) => (
            <button key={props.availability.id} id="apptbtn" onClick={setAppt}>
              {time.time}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>There are not appointments available for this day</h2>
        </div>
      )}
    </div>
  );
};

export default Calendar;
