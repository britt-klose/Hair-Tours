import React from "react";
import Rating from "@mui/material/Rating";

const ReviewList = ({ reviews = [] }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {reviews &&
          reviews.map((review) => (
            <div key={review} className="reviewBox">
              <div className="mb-3">
                <Rating name="read-only" value={review.rating} readOnly />
                <h4 className="p-2 m-0">
                  {review.description} <br />
                </h4>
                <h6>- {review.reviewAuthor}</h6>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewList;
