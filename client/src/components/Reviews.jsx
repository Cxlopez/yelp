import React from "react";
import StarRating from "./StarRating";

function Reviews({ reviews }) {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map((review) => {
        return (
          <div
            key={review.id}
            className="card text-white bg-primary mb-3 mr-4"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header d-flex justifu-content-between">
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        );
      })}
      {/* <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
        <div className="card-header d-flex justifu-content-between">
          <span>Estuardo</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This place was great</p>
        </div>
      </div> */}
    </div>
  );
}

export default Reviews;
