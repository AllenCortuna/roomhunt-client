import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import React from "react";

const Review = ({ review, width }) => {
  const star = `-mt-1 my-auto ${width} drop-shadow-sm inline text-yellow`;
  const starClear = `-mt-1 my-auto ${width} drop-shadow-sm inline text-zinc-400`;

  return (
    <span className="grid gap-2 p-1 py-0 grid-cols-5 w-[5rem] rounded-md">
      <span>
        {review >= 1 ? (
          <BsStarFill className={star} />
        ) : review >= 0.5 ? (
          <BsStarHalf className={star} />
        ) : (
          <BsStar className={star} />
        )}
      </span>

      <span>
        {review >= 2 ? (
          <BsStarFill className={star} />
        ) : review >= 1.5 ? (
          <BsStarHalf className={star} />
        ) : (
          <BsStar className={starClear} />
        )}
      </span>

      <span>
        {review >= 3 ? (
          <BsStarFill className={star} />
        ) : review >= 2.5 ? (
          <BsStarHalf className={star} />
        ) : (
          <BsStar className={starClear} />
        )}
      </span>

      <span>
        {review >= 4 ? (
          <BsStarFill className={star} />
        ) : review >= 3.5 ? (
          <BsStarHalf className={star} />
        ) : (
          <BsStar className={starClear} />
        )}
      </span>

      <span>
        {review >= 5 ? (
          <BsStarFill className={star} />
        ) : review >= 4.5 ? (
          <BsStarHalf className={star} />
        ) : (
          <BsStar className={starClear} />
        )}
      </span>
    </span>
  );
};

export default Review;

Review.defaultProps = {
  review: 0,
  width: "text-sm",
};
