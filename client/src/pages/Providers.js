import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
// import { ADD_PROVIDER } from "../utils/mutations";
import { QUERY_PROVIDER } from "../utils/queries";
import StylistList from "../components/providerList";

const Providers = () => {
  let { id } = useParams();

  const { data } = useQuery(QUERY_PROVIDER, {
    variables: { _id: id },
  });

  const stylist = data?.services || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Providers:</h1>
      </div>

      <div className="card-body text-center mt-3">
        {stylist.skills?.length > 0 && (
          <StylistList services={stylist.services} />
        )}
        {/* {stylist.map((service) => {
          return (
            <div key={service.id} value={service.name}>
              {service.username}
              {service.name}
            </div>
          );
        })} */}
        <div className="card-footer text-center m-3">
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Providers;
