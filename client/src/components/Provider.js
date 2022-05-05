// *************NOTES: This component is for the Provider List - Map over Provider and return row

// import { useQuery, useMutation } from "@apollo/client";
// import { useParams } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

export default function Provider() {
  //   let { id } = useParams();

  //   const { data } = useQuery(QUERY_PROVIDERS, {
  //     variables: { _id: id },
  //   });

  //   const providerServices = data?.services || [];

  //   const [addProvider] = useMutation(ADD_PROVIDER);

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
    <div className="card bg-white card-rounded">
      <div className="card-header bg-dark text-start">
        <h1>Name:</h1>
      </div>

      <div className="card-body text-center mt-3">
        <div></div>
        <Link to="/providers/1">
          <button className="btn btn-info">Book it</button>{" "}
        </Link>
        <div className="card-footer text-center m-3"></div>
      </div>
    </div>
  );
}
