/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AccInfo from "./AccInfo";
import { accStore } from "../../state/acc";
import Loading from "../utility/Loading";
import NotFound from "../NotFound";
import { useParams } from "react-router-dom";
import OwnRooms from "./OwnRooms";

const BusinessInfo = () => {
  const acc = accStore((state) => state.acc);
  const getAcc = accStore((state) => state.getAcc);
  const loading = accStore((state) => state.loading);
  const { id } = useParams();

  useEffect(() => {
    getAcc(id);
  }, [getAcc, id]);

  return (
    <span>
      <div className="flex flex-row justify-center flex-wrap mt-9 md:mt-20 p-4 mx-auto">
        {/* display not found if invalid id   */}
        {!loading && !acc && <NotFound />}
        {/* if loading  */}
        {loading ? (
          <span className="mx-auto max-w-[24rem] p-5">
            <Loading text={"Getting Info"} />
          </span>
        ) : (
          acc && (
            <span>
              <AccInfo user={acc} />
            </span>
          )
        )}
        <OwnRooms />
      </div>
    </span>
  );
};

export default BusinessInfo;
