import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_STYLIST } from "../utils/queries";

const ServiceList = () => {
  let { userId } = useParams();

  const { data } = useQuery(QUERY_SINGLE_STYLIST, {
    variables: { userId: userId },
  });

  const user = data?.user.services || [];

  if (user.length) {
    console.log(user);
    return (
      <div>
        {user.map((service) => (
        <div>
          <p>{service.serviceName} ${service.price}</p>
        </div>
      ))}
      </div>
    );
  }
  return (
    <div>
    </div>
  );
};

export default ServiceList;
