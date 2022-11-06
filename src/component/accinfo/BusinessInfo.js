/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AccInfo from "../dashboard/AccInfo";
import { accStore } from "../../state/acc";
import Loading from "../utility/Loading";
import NotFound from "../utility/NotFound";
import { useParams } from 'react-router-dom';

const BusinessInfo = () => {
  const acc = accStore((state) => state.acc);
  const getAcc = accStore((state) => state.getAcc);
  const err = accStore((state) => state.err);
  const loading = accStore((state) => state.loading);
  const { id } = useParams()
  
  useEffect(() => {
    getAcc(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <span>
      <div className="grid mt-14 md:mt-20 p-4 mx-auto">
        {loading ? (
          <span className="max-w-[24rem] p-5">
            <Loading text={"Getting Accommodation Info"} />
          </span>
        ) : (
          acc && (
            <span>
              <AccInfo user={acc} />
            </span>
          )
        )}
      </div>
      {err && <NotFound />}
    </span>
  );
};

export default BusinessInfo;
