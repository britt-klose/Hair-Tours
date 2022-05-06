import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_PROVIDER } from "../utils/mutations";
import { QUERY_PROVIDERS } from "../utils/queries";
import StylistList from "../components/providerList";

const Providers = () => {
  let { id } = useParams();

  const { data } = useQuery(QUERY_PROVIDERS, {
    variables: { _id: id },
  });

  const providerServices = data?.services || [];

  const [addProvider] = useMutation(ADD_PROVIDER);

  const handleServices = async (techNum) => {
    try {
      await addProvider({
        variables: { _id: id, services: providerServices },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Providers:</h1>
      </div>

      <div className="card-body text-center mt-3">
        <div name="services" onChange={handleServices}>
          {providerServices.map((service) => {
            return (
              <div key={service._id} value={service.name}>
                {service.img}
                {service.name}
              </div>
            );
          })}
        </div>
        <div className="card-footer text-center m-3">
          <br></br>
          <StylistList />
        </div>
      </div>
    </div>
  );
};

export default Providers;
