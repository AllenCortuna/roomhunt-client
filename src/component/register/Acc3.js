import React from "react";
import { otpContainer, otpInput, otpText } from "./style";
import Button from "../../component/btn/Button";
import { useRegisterState } from "../../state/register";
import { useNavigate } from "react-router-dom";
const Acc3 = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = React.useState(new Array(4).fill(""));

  const data = useRegisterState((state) => state.data);
  const verifyEmail = useRegisterState((state) => state.verifyEmail);

  const handleVerify = () => {
    console.log("accId", data._id);
    // data to be send in the zustand api
    const verifyData = { otp: otp.join(""), accommodatorId: data._id };
    verifyEmail(verifyData, navigate);
  };

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
        <p className={otpText}>
          Please enter the 4 digit OTP code sent to your email
        </p>

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
        <span className="flex flex-wrap justify-between w-[10.5rem] mt-5 mx-auto">
          <Button
            onClick={() => setOtp([...otp.map(() => "")])}
            text={"Clear"}
            color={"bg-none border-2 border-gray-500"}
            txtClr={"text-gray-400"}
          />
          <Button
            onClick={handleVerify}
            text={"Verify"}
            color={"bg-secondary"}
          />
        </span>
      </div>
    </>
  );
};

export default Acc3;
