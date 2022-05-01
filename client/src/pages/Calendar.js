import React, { useState } from "react";
import Calendarr from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = (props) => {
  const [value, onChange] = useState(new Date());
  function clicky() {
    console.log("in function");
  }

  return (
    <div>
      <Calendarr
        id="root"
        onChange={onChange}
        value={value}
        onClick={clicky()}
        showNeighboringMonth={false}
      />
      {props.availability ? (
        <div>
          <h2>Available Appointments</h2>
          {props.availability.map((time) => (
            <button key={props.availability.id} className="apptbtn">
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