import React from "react";

const Terms = () => {
  return (
    <div className="grid max-w-[22rem] mx-auto mt-14">
    <h4>Terms and Condition</h4>
      <ol className="text-sm rale font-[500] text-zinc-500 list-decimal flex flex-col gap-2 p-4">
        <li>Accommodation must be 18 years old only. </li>
        <li>Room seekers must be verified to send a review.</li>
        <li>It takes few days to validate.</li>
        <li>Room seekers must be verified to send message. </li>
        <li>Accommodators must be verified to upload rooms.</li>
        <li> We do not cover transactions and payment.</li>
        <li> We will not share the collected data like rooms info, email and personal info. </li>
        <li> We are not responsible for what the seekers and accommodation have agreed upon. </li>
        <li> It is not our responsibility for the client choices to book or reserve a room. </li>
        <li>The app is in testing phase and possibly contain some bug .</li>
        <li>List of valid ID 
          <ul className="list-disc pl-7">
            <li>Passport</li>
            <li>SSS</li>
            <li>UMID</li>
            <li>GSIS</li>
            <li>LTO</li>
            <li>PRC</li>
            <li>COMELEC</li>
            <li>POSTAL</li>
          </ul>
       </li> 
      </ol>
    </div>
  );
};

export default Terms;
