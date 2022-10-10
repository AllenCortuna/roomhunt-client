import React from "react";
import { otpContainer, otpInput, otpText } from "../../style/register";
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
      <div className={otpContainer}>
<p className={otpText}>Please enter the OTP sent to your email</p>

        <div className="">
          {otp.map((data, index) => {
            return (
              <input
                className={otpInput}        
                type="number"
                name="otp"
                maxLength={"1"}
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        <span className= "flex flex-wrap justify-between w-[10.5rem] mt-5 mx-auto">
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
