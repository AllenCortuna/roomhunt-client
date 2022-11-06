/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { reviewStore } from "../../state/review";

const ReviewList = ({ roomId }) => {
  const reviews = reviewStore((state) => state.reviews);
  const getReviews = reviewStore((state) => state.getReviews);
  useEffect(() => {
    getReviews(roomId);
  }, [roomId]);

  return <div className="grid md:grid-cols-2 p-3 gap-5 md:gap-10">
    {reviews?.map((review)=>(
      <span>
      {review.comment}
      </span>
    ))}

    </div>;
};

export default ReviewList;
