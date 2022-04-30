import React, { useState } from "react";
import Calendarr from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = ({ appointments, time }) => {
  const [value, onChange] = useState(new Date());
  function clicky() {
//     if (!appointments.length) {
//       return <div>No appointments available for this day</div>;
//     }
//     console.log(this);
//     <button>{time}</button>
   }

  return (
    <div>
      <Calendarr
        onChange={onChange}
        value={value}
        onClick={clicky()}
        showNeighboringMonth={false}
      />
    </div>
  );
};

export default Calendar;
