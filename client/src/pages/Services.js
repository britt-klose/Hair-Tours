import { useState } from "react";
import ButtonBases from "../components/selectService";

import { useNavigate, Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_SERVICES } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";

//to do: six image buttons for the services check button style

const Services = () => {
  const { data } = useQuery(QUERY_SERVICES);

  const servicesList = data?.services || [];

  const [formData, setFormData] = useState({});
  let navigate = useNavigate();

  const [saveServices] = useMutation(UPDATE_USER);

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
    <div className="container fluid">
      <div className="container-body m-5">
        <h1>Let's Find the Best Service for You!</h1>
      </div>
      <div className="container-body m-5">
        <form onSubmit={handleFormSubmit}>
          <h2>Choose your Services:</h2>

          <div>
            <ButtonBases onClick={handleInputChange} value={servicesList} />
            <Link to="/checkout">
              <button className="btn btn-lg btn-danger ">Checkout</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Services;
