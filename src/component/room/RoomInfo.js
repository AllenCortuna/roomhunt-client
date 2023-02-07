/* eslint-disable react-hooks/exhaustive-deps */
// import Moment from "react-moment";
import Loading from "../utility/Loading";
// import review from '../img/review.svg'
import React, { useEffect } from "react";
import { roomStore } from "../../state/room";
import { useParams } from "react-router-dom";
import { MdLocationOn, MdFeedback } from "react-icons/md";
import Review from "./Review";
import Info from "./Info";
import RoomReview from "./RoomReview";
import ReviewList from "./ReviewList";
import Send from "./Send";
import Slider from "./Slider";
import Back from "../btn/Back";

const RoomInfo = () => {
  const getRoom = roomStore((state) => state.getRoom);
  const room = roomStore((state) => state.room);
  const loading = roomStore((state) => state.loading);
  const updateView = roomStore((state) => state.updateView);
  const { id } = useParams();
  const verified = JSON.parse(localStorage?.getItem("client"))?.result.verified;

  useEffect(() => {
    getRoom(id);
  }, [id]);

  useEffect(() => {
    updateView(id);
  }, []);

  const waiting = (
    <span className="grid w-[20rem] mt-[20%] mx-auto">
      <Loading text={"Processing Info..."} />
    </span>
  );
  return (
    <>
      {loading ? (
        waiting
      ) : (
        <div className="grid gap-5 w-[21rem] md:w-[42rem] mx-auto">
          <span className="grid grid-cols-1 md:grid-cols-3 w-[21rem] md:w-[42rem] h-auto mt-[20%] rounded-lg bg-white shadow-md mx-auto border p-0 gap-y-14 md:gap-y-0">
            <span className="block md:col-span-2 pt-4 ">
              {/* room owner */}
              <span className="shad grid p-3 bg-zinc-200  w-auto h-auto rounded-tr-xl rounded-br-xl md:mr-20 mr-8 overflow-x-scroll">
                <h4 className="drop-shadow-sm text-cyan-900 font-bold text-xs capitalize">
                  {room.ownerName}
                </h4>
                <h4 className="text-zinc-500 text-[.6rem] rale truncate">
                  <MdLocationOn className="inline mb-1" />
                  {room.location}
                </h4>
              </span>
        
              <Send room={room} verified={verified} />
        
                {/* room review */}
                <span className="ml-4 grid">
                  <h4 className="text-cyan-900 font-[600] text-xs drop-shadow-sm">
                    <MdFeedback className="inline mr-1" />
                    Ratings
                  </h4>
                  <span className="flex flex-row">
                    <Review review={room.review} />
                    <h4 className="text-zinc-500 text-[.64rem] capitalize rale w-[10rem] ml-3 mt-1 ">
                      total review:
                      <span className="rale font-bold">{room.total}</span>
                    </h4>
                  </span>
                </span>

              {/* room info */}
              <span className="flex flex-wrap items-start">
                <Info room={room} />
              </span>

              {/* room review */}
              {verified && <RoomReview room={room} />}
            </span>
            <Slider image={room.image} />
          </span>
          <ReviewList roomId={room._id} />
          <Back />
        </div>
      )}
    </>
  );
};

export default RoomInfo;
