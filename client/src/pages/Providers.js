import { useQuery } from "@apollo/client";
import { QUERY_STYLISTS } from "../utils/queries";
import StylistList from "../components/stylistList";

const Providers = () => {
  const { data } = useQuery(QUERY_STYLISTS);

  const users = data?.users || [];

  return (
    <div className="card bg-white card-rounded" id="stylists">
      <div className="card-header text-center">
        <h1>Choose a service provider:</h1>
      </div>

      <div className="card-body text-center mt-3">
        <StylistList users={users} />
      </div>
    </div>
  );
};

export default Providers;
