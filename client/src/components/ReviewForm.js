import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Ratings from "./Rating";

import { ADD_REVIEW } from "../utils/mutations";

// import Auth from "../../utils/auth";

const ReviewForm = ({ profileId }) => {
  const [review, setReview] = useState("");

  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addReview({
        variables: { review },
      });

      console.log(data);

      setReview("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Review this Stylist</h4>

      {/* {Auth.loggedIn() ? ( */}
      <form
        className="reviewForm flex-column justify-center justify-space-between-md"
        onSubmit={handleFormSubmit}
      >
        <Ratings className="align-content-start justify-flex-start w-25" />

        <div className="flex-row w-100">
          <input
            placeholder="Were you satisfied with your last service?"
            value={review}
            className="form-input"
            onChange={(event) => setReview(event.target.value)}
          />{" "}
          <div className="w-25 name">
            <input
              placeholder="Name"
              // value={}
              className="form-input w-25"
              onChange={(event) => setReview(event.target.value)}
            />
          </div>
          <div>
            <button
              className="btn btn-lg btn-info btn-block py-3"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>

        {error && (
          <div className="my-3 bg-danger text-white p-3">{error.message}</div>
        )}
      </form>
      {/* ) : ( */}
      {/* <p>
          You need to be logged in to review. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p> */}
      {/* )} */}
    </div>
  );
};

export default ReviewForm;
