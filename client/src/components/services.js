import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_STYLIST } from "../utils/queries";

const ServiceList = () => {
  let { userId } = useParams();

  const { data } = useQuery(QUERY_SINGLE_STYLIST, {
    variables: { userId: userId },
  });

  const user = data?.user || [];
  const services = user.services;
  console.log(user, services);

  return (
    <div>
      {/* {user.services.map((service) => (
        <div key={service}>
          <p>{service.serviceName}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ServiceList;
