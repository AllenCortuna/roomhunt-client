import React from "react";
import { HiInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
const TermsAgree = () => {
  return (
   // update to hide component 
    <div className="toast">
      <span className="text-center">
        <HiInformationCircle className="inline text-white mr-3" />
        <p className="text-xs inline">
          Using this product means you agreed to our <Link to={"/terms"} className="underline"> Terms and Conditions </Link>
        </p>
      </span>
    </div>
  );
};

export default TermsAgree;
