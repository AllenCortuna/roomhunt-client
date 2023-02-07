/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import upload from "../img/upload.svg";
import { roomStore } from "../../state/room";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

const RoomReview = ({ room }) => {
  const reviewRoom = roomStore((state) => state.reviewRoom);
  const [review, setreview] = useState(0);
  const [comment, setcomment] = useState("");
  const id = JSON.parse(localStorage.getItem("client"))?.result?._id;
  const name = JSON.parse(localStorage.getItem("client"))?.result?.name;
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (review === 0) {
      alert("select a star");
    } else if (comment === "") {
      alert("enter a comment");
    } else {
      reviewRoom({
        room: room._id,
        senderId: id,
        senderName: name,
        review: review,
        comment: comment,
      });
    }
  };

  const star = "-mt-1 my-auto text-xl drop-shadow-md inline text-yellow ";
  const starClear = "-mt-1 my-auto text-xl drop-shadow-md inline text-zinc-100 ";
  return (
    <div className="flex flex-wrap gap-y-3 shadow-lg rounded-lg ml-3 p-2 w-[18rem] justify-between items-center bg-zinc-400 mt-10 md:mt-0 mb-3">
      <span className="grid gap-1 p-1 py-0 grid-cols-5 w-auto ">
        <span onClick={() => setreview(1)}>
          {review >= 1 ? (
            <BsStarFill className={star} />
          ) : review >= 0.5 ? (
            <BsStarHalf className={star} />
          ) : (
            <BsStar className={starClear} />
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
      <button
        type="submit"
        onClick={onSubmit}
        className="p-2 font-semibold bg-zinc-300 rounded-md hover:shadow-lg shad"
      >
        <p className="drop-shadow-sm text-[.74rem] text-zinc-500 ">submit</p>
      </button>
      <textarea
        rows={3}
        cols={50}
        value={comment}
        className="rounded-md text-zinc-500 text-xs p-2 focus:bg-brown focus:text-white focus:outline-none transition-all duration-300 ease-linear"
        onChange={(e) => setcomment(e.target.value)}
      />
    </div>
  );
};

export default RoomReview;
