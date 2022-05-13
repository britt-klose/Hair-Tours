import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Ratings from "./Rating";
import { ADD_REVIEW } from "../utils/mutations";

const ReviewForm = (userId) => {

  const [review, setReview] = useState({
    ...userId,
    description: "",
    reviewAuthor: "",
    rating: 4,
  });

  const [addReview, { error }] = useMutation(ADD_REVIEW);
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = addReview({
        variables: { ...review },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "description") {
      setReview({ ...review, [name]: value });
    } else if (name !== "description") {
      setReview({ ...review, [name]: value });
    }
  };

  return (
    <div>
      <h4>Review this Stylist</h4>
      <form
        className="reviewForm flex-column justify-center justify-space-between-md"
        onSubmit={handleFormSubmit}
      >
        <Ratings className="align-content-start justify-flex-start w-25" />

        <div className="flex-row w-100">
          <input
            name="description"
            placeholder="Were you satisfied with your last service?"
            value={review.description}
            className="form-input"
            onChange={handleChange}
          />{" "}
          <div className="w-25 name">
            <input
              name="reviewAuthor"
              placeholder="Name"
              value={review.reviewAuthor}
              className="form-input w-25"
              onChange={handleChange}
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
    </div>
  );
};

export default ReviewForm;
