import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_STYLIST } from "../utils/queries";
import Avatar from "@mui/material/Avatar";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import { PopupWidget } from "react-calendly";
import ServiceList from "../components/serviceList";

const ProviderbyId = () => {
  let { userId } = useParams();

  const { data } = useQuery(QUERY_SINGLE_STYLIST, {
    variables: { userId: userId },
  });

  const user = data?.user || [];
  const service = user.services;
  const review = user.reviews;
  console.log(userId)

  function isCalendlyEvent(e) {
    return e.data.event && e.data.event.indexOf("calendly") === 0;
  }

  window.addEventListener("message", function (e) {
    if (isCalendlyEvent(e)) {
      console.log(e.data.event);
    }
    if (e.data.event === "calendly.event_scheduled") {
      window.location.replace("/services");
    }
  });

  return (
    <div style={{ width: "80%", height: "100%", background: "white" }}>
      <div className="flex-row mt-3" id="profilebyid">
        <div id="profilePhoto" className="col-lg-1 justify-center">
          <Avatar
            alt="Profile Photo"
            src={user.profilePhoto}
            sx={{ width: 75, height: 75 }}
          />
        </div>
        <div className="col-lg-6 text-end">
          <h1>{user.username}</h1>
          <h3>{user.email}</h3>
        </div>
        <div className="col-lg-4">
          <div className="card-body text-center mt-3">
            <div name="services">
              <h1>Services:</h1>
              <ServiceList services={service} />
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <br></br>
          <PopupWidget
            url={`https://calendly.com/${user.calId}`}
            rootElement={document.getElementById("root")}
            text="Click here to schedule!"
            textColor="#ffffff"
            color="#00a2ff"
          />
        </div>
      </div>
      <div className="mt-3 p-4" style={{ border: "1px solid #1a1a1a" }}>
        <ReviewForm userId={userId}/>
        <ReviewList reviews={review} />
      </div>
    </div>
  );
};

export default ProviderbyId;
