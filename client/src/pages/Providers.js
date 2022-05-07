// import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
// import { ADD_PROVIDER } from "../utils/mutations";
import { QUERY_STYLISTS } from "../utils/queries";
import StylistList from "../components/stylistList";

const Providers = () => {
  const { data } = useQuery(QUERY_STYLISTS);
  // const [stylists, setStylists] = useState([]);
  // const [activeFilter, setActiveFilter] = useState("All");
  // const [filterStylists, setFilterStylists] = useState([]);

  // useEffect((data) => {
  //   setStylists(data);
  //   setFilterStylists(data);
  // }, []);

  const users = data?.users || [];

  // const handleStylistFilter = (item) => {
  //   setActiveFilter(item);

  //   setTimeout(() => {
  //     if (item === "All") {
  //       setFilterStylists(stylists);
  //     } else {
  //       setFilterStylists(
  //         stylists.filter((stylist) => stylist.tags.includes(item))
  //       );
  //     }
  //   }, 500);
  // };

  return (

    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-#4900e5 text-center">
        <h1>Pick a service provider from the list below:</h1>
      </div>

      {/* <div className="app__work-filter">
        {["Hair Cut", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleStylistFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      {filterStylists.map((work, index) => (*/}
      <div className="card-body text-center mt-3">
        <StylistList users={users} />
        {/* {stylists?.length > 0 && <StylistList services={stylist.services} />}
        {stylists.map((service) => {
          return (
            <div key={service.id} value={service.name}>
              {service.username}
              {service.name}
            </div>
          );
        })} */}
      </div>
      {/* ))} */}
    </div>
  );
};

export default Providers;
