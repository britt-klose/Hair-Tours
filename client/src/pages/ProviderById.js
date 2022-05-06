// import { useQuery, useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";
// import { ADD_PROVIDER } from "../utils/mutations";
// import { QUERY_PROVIDERS } from "../utils/queries";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import Calendar from "./Calendar";

const ProviderbyId = () => {
  //   let { id } = useParams();

  //   const { data } = useQuery(QUERY_PROVIDERS, {
  //     variables: { _id: id },
  //   });

  //   const providerServices = data?.services || [];

  //   const handleServices = async (techNum) => {
  //     try {
  //       await addProvider({
  //         variables: { _id: id, services: providerServices },
  //       });
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  return (
    <div style={{ width: "80%", height: "100%", background: "white" }}>
      <div>
        <h1>Stylist Name</h1>
        <h3>Location:</h3>
        <h3>Phone:</h3>
      </div>
      <div className="card-body text-center mt-3">
        <div name="services">
          {/* onChange={handleServices}>
        {providerServices.map((service) => { */}
          {/* return (
               <div key={service._id} value={service.name}>
                 {service.img}
                 {service.name}
               </div>
             );
           })} */}
        </div>
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
