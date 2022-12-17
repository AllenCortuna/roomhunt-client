import React, { useEffect } from "react";
import { accStore } from "../../state/acc";
import AccInfo from "./AccInfo";

const FeaturedAcc = () => {
  const accs = accStore((state) => state.featured);
  const getFeaturedAccs = accStore((state) => state.getFeaturedAccs);

  useEffect(() => {
    getFeaturedAccs()
  }, [getFeaturedAccs]);
  
  return (
    <div className="flex flex-wrap w-full lg:p-20 md:p-8 content-start justify-start gap-10">
      <h4 className=" w-full text-cyan-800 font-bold drop-shadow-md text-xl mb-4 ml-3 ">
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
