import { useState } from "react";
import ButtonBase from "../components/selectService";

import { useNavigate, Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_SERVICES } from "../utils/queries";
// import { SAVE_SERVICES } from "../utils/mutations";

//to do: six image buttons for the services check button style

const Services = () => {
  const { data } = useQuery(QUERY_SERVICES);

  const servicesList = data?.services || [];

  const [formData, setFormData] = useState({});
  let navigate = useNavigate();

  const [saveServices] =
    useMutation();
    // SAVE_SERVICES

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const saveService = await saveServices({
        variables: { ...formData },
      });

      console.log(saveService);

      navigate(`/providers`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's Find the Best Service for You!</h1>
      </div>
      <div className="card-body m-5">
        <form onSubmit={handleFormSubmit}>
          <label>Services </label>
          <ButtonBase onClick={handleInputChange} value={servicesList} />
          <Link to="/providers">
            <button className="btn btn-lg btn-danger">Find a Provider</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Services;
