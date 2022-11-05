import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import house from './img/house.svg'

const About = () => {
  return (
    <div className="mx-auto p-5 mt-10 md:mt-20 max-w-[50rem] gap-14 gap-y-20 flex-wrap flex justify-center content-start ">
      <span className="w-[21rem] text-left block ">
        <h4 className="text-cyan-800 font-bold text-md drop-shadow-sm">
          <FaInfoCircle className="inline mr-2" />
          About us!
        </h4>
        <span className="text-[.84rem] text-zinc-500 ml-5 mt-2 block ">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea n sunt occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla ni in ulpa proident adipisicing id nulla ni in 
        </span>
      <span className="mt-5 block">
    <img src={house} alt="hotel" className="w-full drop-shadow-md" />
      </span>
      </span>
    
    
      <span className="w-[21rem] text-left block ">
        <h4 className="text-cyan-800 font-bold text-md drop-shadow-sm">
          <FaInfoCircle className="inline mr-2" />
          Objective
        </h4>
        <span className="text-[.84rem] text-zinc-500 ml-5 mt-2 block ">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. 
        </span>
    
        <h4 className="text-cyan-800 font-bold text-md drop-shadow-sm mt-10">
          <FaInfoCircle className="inline mr-2" />
          Contact
        </h4>
        <span className="text-[.84rem] text-zinc-500 ml-5 mt-2 block ">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostr
        </span>
      </span>
    
    </div>
  );
};

export default About;
