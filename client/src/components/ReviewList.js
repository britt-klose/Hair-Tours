import React from "react";

const ReviewList = ({ reviews = [] }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {reviews &&
          reviews.map((review) => (
            <div key={review} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {review.description} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewList;
