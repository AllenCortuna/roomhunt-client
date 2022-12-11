import React, { useEffect } from "react";
import { accStore } from "../../state/acc";
import AccInfo from "../accinfo/AccInfo";

const FeaturedAcc = () => {
  const accs = accStore((state) => state.featured);
  const getFeaturedAccs = accStore((state) => state.getFeaturedAccs);

  useEffect(() => {
    getFeaturedAccs()
  }, [getFeaturedAccs]);
  
  return (
    <div className="flex flex-wrap w-full lg:p-40 md:p-14 content-start justify-start">
      <h4 className="text-cyan-800 font-bold drop-shadow-md text-lg mb-4 ml-3 mx-auto text-center">
        Featured Accommodations
      </h4>
    
      {accs?.map((acc) => (
        <span key={acc._id}>
          <AccInfo user={acc} />
        </span>
      ))}
    </div>
  );
};

export default FeaturedAcc;
