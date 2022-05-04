// import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
// import { ADD_PROVIDER } from "../utils/mutations";
// import { QUERY_PROVIDERS } from "../utils/queries";

const Provider = () => {
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
    <div>
      <div className="card-header bg-dark text-center">
        <h1>Provider Name</h1>
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
        <button
          className="btn btn-info"
          //   onClick={() => handleServices()}
        ></button>{" "}
        <div className="card-footer text-center m-3">
          <br></br>
          <Link to="/">
            <button className="btn btn-lg btn-danger">
              View all Providers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Provider;
