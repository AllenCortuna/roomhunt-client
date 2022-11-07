import React, { useEffect } from "react";
import Review from "./Review";
import { reviewStore } from "../../state/review";

const ReviewList = ({ roomId }) => {
  const reviews = reviewStore((state) => state.reviews);
  const getReviews = reviewStore((state) => state.getReviews);
  useEffect(() => {
    getReviews(roomId);
  }, [getReviews, roomId]);

  return (
    <div className="grid md:grid-cols-2 p-3 gap-5 md:gap-10">
      {reviews?.map((review) => (
        <span key={review._id} className="max-w-[20rem] p-3 rounded-lg grid gap-2 border bg-zinc-100" >
          <span className="flex flex-cols justify-start content-center gap-5">
            <span className="rounded-full h-10 w-10 bg-zinc-600 text-white text-3xl font-bold text-center flex justify-center content-center pt-[.2rem] rale">
              {review.senderName.charAt(0)}
            </span>
        <span>
        <h4 className="text-xs font-[500] text-zinc-500 ">{review.senderName}</h4>
        <Review review={review.review} />
        </span>
        
          </span>
          <span className="text-xs text-zinc-400">{review.comment}</span>
        </span>
      ))}
    </div>
  );
};

export default ReviewList;
