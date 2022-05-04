// *************NOTES: This component is for the Provider List - Map over Provider and return row

// import { useQuery, useMutation } from "@apollo/client";
// import { useParams } from "react-router-dom";
import React from "react";

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
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Providers offering services you desire:</h1>
      </div>

      <div className="card-body text-center mt-3">
        <div></div>
        <button className="btn btn-info"></button>{" "}
        <div className="card-footer text-center m-3"></div>
      </div>
    </div>
  );
}
