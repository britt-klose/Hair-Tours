import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_STYLIST } from "../utils/queries";
import Avatar from "@mui/material/Avatar";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import { PopupWidget } from "react-calendly";
import ServiceList from '../components/services'

const ProviderbyId = () => {
  let { userId } = useParams();

  const { data } = useQuery(QUERY_SINGLE_STYLIST, {
    variables: { userId: userId },
  });

  const user = data?.user || [];

  
  return (
    <div style={{ width: "80%", height: "100%", background: "white" }}>
      <div className="flex-row">
        <div className="col-1">
          <Avatar
            alt="Profile Photo"
            src={user.profilePhoto}
            sx={{ width: 75, height: 75 }}
          />
        </div>
        <div className="col-7">
          <h1>{user.username}</h1>
          <h3>{user.email}</h3>
        </div>
        <div className="col-3">
          <div className="card-body text-center mt-3">
            <div name="services">
              <h1>Services:</h1>
              <ServiceList />
            </div>
          </div>
        </div>
        <div className="card-footer text-center m-3">
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
      <div className="my-4 p-4" style={{ border: "1px dotted #1a1a1a" }}>
        <ReviewForm />
        <ReviewList />
      </div>
    </div>
  );
};

export default ProviderbyId;
