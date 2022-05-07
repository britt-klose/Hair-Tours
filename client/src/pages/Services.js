import { useState } from "react";
import ServicesChecklist from "../components/servicesChecklist";

import { useNavigate, Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_SERVICES } from "../utils/queries";
import { SAVE_SERVICES } from "../utils/mutations";

//to do: six image buttons for the services check button style 

const Services = () => {
  const { data } = useQuery(QUERY_SERVICES);

  const servicesList = data?.services || [];

  const [formData, setFormData] = useState({});
  let navigate = useNavigate();

  const [saveServices] = useMutation(SAVE_SERVICES);

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
    // card bg-white card-rounded w-70
    //className="container-header bg-dark text-center"

  return (
     <div className="container fluid"> 
  
      <div className="container-body m-5">
        <h1>Let's Find the Best Service for You!</h1>
      </div>
      <div className="container-body m-5">
        <form onSubmit={handleFormSubmit}>
          <h2>Pick one </h2>
          <div>
          <ButtonBases onClick={handleInputChange} value={servicesList} />
          <Link to="/stylists">
            
            <button className="btn btn-lg btn-danger">Find a Provider</button>
          </Link>
          </div>
        </form>
      </div>
    </div>
    <div className="container-body m-5">
      <form onSubmit={handleFormSubmit}>
        <h2>Pick one </h2>
        
        <ButtonBases onClick={handleInputChange} value={servicesList} />
        <Link to="/stylists">
          
          <button className="btn btn-lg btn-danger">Find a Provider</button>
        </Link>
        
      </form>
    </div>
  </div>
  );
};

export default Services;
