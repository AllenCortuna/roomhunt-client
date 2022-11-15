import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import house from './img/client.svg'

const About = () => {
  return (
    <div className="mx-auto p-5 mt-10 md:mt-20 max-w-[50rem] gap-14  md:gap-20 lg:gap-32  flex-wrap flex justify-center ">
      <span className="w-[21rem] text-left block ">
        <h4 className="text-cyan-800 font-bold text-md drop-shadow-sm">
          <FaInfoCircle className="inline mr-2" />
          About us!
        </h4>
        <span className="text-[.84rem] text-zinc-500 ml-5 mt-2 block ">
    This study focuses on the development of a web-based platform that will act as medium to connect the accommodation providers and seekers. Progressive Web App approach will be utilized to target multiple platforms. The application targets sectors are people that are interested in finding a room to stay like students looking for a boarding house or travelers looking for a temporary accommodation. This application incorporates several common functions and design elements found on most websites, allowing clients to find vacant rooms and to check its specification and information.
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
    <b>Customers or accommodation seekers</b>. They can use this platform to save time in searching and checking the information, details, and availability of their desired rooms in hotels, resorts, dormitories, apartments, or boarding houses. They can also check and compare prices, categories, convenience, benefits, or any details of their desired rooms without going directly to the location.
    <br/>
    <br/>
<b>Accommodation providers</b>. They can use the platform to improve their visibility in the market. Then can easily determine what improvement needs to be done based on the feedback of the customers. Moreover, the platform ensures that the information is updated by allowing the owners to manage the details of their offered accommodation.
        </span>
    
        <h4 className="text-cyan-800 font-bold text-md drop-shadow-sm mt-10">
          <FaInfoCircle className="inline mr-2" />
          Contact
        </h4>
        <span className="text-[.84rem] text-zinc-500 ml-5 mt-2 block ">
    Verification of Account may take a few days and the document or valid I.D attach must be legitimate. Client and Accommodation providers can contact us in this email: <a href="mailto:roomhunt@gmail.com" className="underline">roomhunt@gmail.com</a>. 
        </span>
      </span>
    
    </div>
  );
};

export default About;
