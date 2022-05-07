import React from "react";
import {
  // CalendlyEventListener,
  PopupWidget,
} from "react-calendly";

const Calendar = () => {
  //   function redirect() {
  //     window.location.href = "localhost:3000/checkout";
  //   }
  return (
    <div>
      <div className="App">
        <PopupWidget
          url="https://calendly.com/${user.email}/"
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </div>
      <div className="App">
        <PopupWidget
          url="https://calendly.com/razorramona"
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </div>
      <div className="App">
        <PopupWidget
          url="https://calendly.com/swanoldronson/beard-trim"
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </div>
      <div className="App">
        <PopupWidget
          url="https://calendly.com/roygbiv0737/hair-coloring"
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </div>
      <div className="App">
        <PopupWidget
          url="https://calendly.com/razorramona/waxing"
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </div>
      <div className="App">
        <PopupWidget
          url="https://calendly.com/swanoldronson/styling"
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          textColor="#ffffff"
          color="#00a2ff"
        />
        {/* <CalendlyEventListener onEventScheduled={redirect} /> */}
      </div>
    </div>
  );
};

export default Calendar;
