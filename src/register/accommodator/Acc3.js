import React from "react";
import { submit } from "../../style/register";
import Button from "../../component/btn/Button";
const Acc3 = () => {
  const [otp, setOtp] = React.useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]); //Focus next input

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center ">
<p className="text-gray-500 text-sm mt-5 mb-4">Please enter the OTP sent to your email</p>

        <div className="">
          {otp.map((data, index) => {
            return (
              <input
                className="text-center h-10 w-8 border-2 border-gray-400 rounded-md space-mono text-gray-500 text-xl m-1 focus:outline-none focus:border-gray-500"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        <span className= "flex flex-wrap justify-between w-[13rem] mt-5">
          <Button
            onClick={() => setOtp([...otp.map(() => "")])}
            text={"Clear"}
            color={"bg-gray-300"}
            txtClr={"text-gray-400"}
          />
          <Button
            onClick={() => alert("Entered OTP is " + otp.join(""))}
            text={"Verify"}
            color={"bg-secondary"}
          />
        </span>
      </div>
              
    </>
  );
};

export default Acc3;
