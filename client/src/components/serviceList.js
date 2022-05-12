import React from "react";

const ServiceList = ({ services = [] }) => {
  if (!services.length) {
    return <h3>This Stylist hasn't listed any services</h3>;
  }

  return (
    <div className="row align-center justify-center">
      {services &&
        services.map((service) => (
          <div key={service} className="serviceBox">
            <div>
              {service.serviceName} - ${service.price}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ServiceList;
