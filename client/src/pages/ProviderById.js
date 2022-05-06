import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_STYLIST } from "../utils/queries";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import Calendar from "./Calendar";

const ProviderbyId = () => {
  let { userId } = useParams();

  const { data } = useQuery(QUERY_SINGLE_STYLIST, {
    variables: { userId: userId },
  });

  const user = data?.user || [];

  return (
    <div style={{ width: "80%", height: "100%", background: "white" }}>
      <div>
        <h1>{user.username}</h1>
        <h3>{user.email}</h3>
        <h3>Phone:</h3>
        <h3>{user.services}</h3>
      </div>
      <div className="card-body text-center mt-3">
        <div name="services"></div>
        <div className="card-footer text-center m-3">
          <br></br>
          <Calendar>
            <button className="btn btn-lg btn-danger">BOOK IT</button>
          </Calendar>
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
