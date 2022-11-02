import React, { useState } from "react";
import upload from "../img/upload.svg";
import { roomStore } from "../../state/room";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

const RoomReview = ({ room }) => {
  const reviewRoom = roomStore((state) => state.reviewRoom);
  const [review, setreview] = useState(0);
  const onSubmit = () => {
    reviewRoom({
      room: room._id,
      senderId: JSON.parse(localStorage.getItem("client"))?._id,
      review: review,
    });
  };

  const star = "-mt-1 my-auto text-sm drop-shadow-sm inline text-yellow";
  const starClear = "-mt-1 my-auto text-sm drop-shadow-sm inline text-zinc-400";
  return (
    <div className="grid md:grid-cols-2 gao-5 m-5">
      <img src={upload} alt="" className="drop-shadow-smw-full " />
      <span className="grid gap-1 p-1 py-0 grid-cols-5 w-auto rounded-md bg-zinc-100 shadow-sm ">
        <span onClick={() => setreview(1)}>
          {review >= 1 ? (
            <BsStarFill className={star} />
          ) : review >= 0.5 ? (
            <BsStarHalf className={star} />
          ) : (
            <BsStar className={star} />
          )}
        </span>

        <span onClick={() => setreview(2)}>
          {review >= 2 ? (
            <BsStarFill className={star} />
          ) : review >= 1.5 ? (
            <BsStarHalf className={star} />
          ) : (
            <BsStar className={starClear} />
          )}
        </span>

        <span onClick={() => setreview(3)}>
          {review >= 3 ? (
            <BsStarFill className={star} />
          ) : review >= 2.5 ? (
            <BsStarHalf className={star} />
          ) : (
            <BsStar className={starClear} />
          )}
        </span>

        <span onClick={() => setreview(4)}>
          {review >= 4 ? (
            <BsStarFill className={star} />
          ) : review >= 3.5 ? (
            <BsStarHalf className={star} />
          ) : (
            <BsStar className={starClear} />
          )}
        </span>

        <span onClick={() => setreview(5)}>
          {review >= 5 ? (
            <BsStarFill className={star} />
          ) : review >= 4.5 ? (
            <BsStarHalf className={star} />
          ) : (
            <BsStar className={starClear} />
          )}
        </span>
      </span>
      <button type="submit" onClick={onSubmit}>
        submit
      </button>
    </div>
  );
};

export default RoomReview;
