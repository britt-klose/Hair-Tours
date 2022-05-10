import React from "react";

const ServiceList = ({ services = [] }) => {
  if (!services.length) {
    return <h3>This Stylist hasn't listed any services</h3>;
  }

  return (
    <div>
      {services &&
        services.map((service) => (
          <div key={service} className="serviceBox">
            <p>{service.serviceName}</p>
          </div>
        ))}
    </div>
  );
};

export default ServiceList;
