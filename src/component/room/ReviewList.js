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
      <span className="max-w-[20rem] p-3 rounded-lg grid gap-2 border bg-zinc-100">
      <span className="flex flex-cols justify-start content-center">
      <span className="rounded-full h-10 w-10 bg-zinc-600 text-white text-3xl font-bold text-center flex justify-center content-center pt-[.2rem] rale">
      {review.senderName.charAt(0) }

      </span>
      
      </span>
      <span>
      {review.comment}
      </span>
      </span>
    ))}

    </div>;
};

export default ReviewList;
