import React from "react";
import { PopupWidget } from "react-calendly";

const Calendar = () => {
  return (
    <div>
      <div className="App">
        <PopupWidget
          url="https://calendly.com/bourpower/hot-shave"
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </div>
      <div className="App">
        <PopupWidget
          url="https://calendly.com/razorramona/hair-cut"
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
      </div>
    </div>
  );
};

export default Calendar;
