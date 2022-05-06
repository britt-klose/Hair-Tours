import { useQuery } from "@apollo/client";
// import { useParams } from "react-router-dom";
// import { ADD_PROVIDER } from "../utils/mutations";
import { QUERY_STYLISTS } from "../utils/queries";
import StylistList from "../components/providerList";

const Providers = () => {
  const { data } = useQuery(QUERY_STYLISTS);

  const users = data?.users || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Providers:</h1>
      </div>

      <div className="card-body text-center mt-3">
        <StylistList users={users} />
        {/* {stylists?.length > 0 && <StylistList services={stylist.services} />}
        {stylists.map((service) => {
          return (
            <div key={service.id} value={service.name}>
              {service.username}
              {service.name}
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Providers;
