import React from "react";
import acc from "../img/acc.svg";
import { img, container, otpContainer, otpInput, otpText } from "./style";
import Button from "../../component/btn/Button";
import { useRegisterState } from "../../state/register";
import { useNavigate } from "react-router-dom";
const Acc3 = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = React.useState(new Array(4).fill(""));

  const loading = useRegisterState((state) => state.loading);
  const verifyEmail = useRegisterState((state) => state.verifyEmail);

  const handleVerify = () => {
    const verifyData = {
      otp: otp.join(""),
      accommodatorId: JSON.parse(localStorage.getItem("register")).result._id,
    };
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
    <div className={container}>
      <img src={acc} alt="login" className={img} />
      <h1 className="text-cyan-800 text-center text-sm uppercase drop-shadow-md font-bold">
        Verify Email
      </h1>
      <hr className="w-full text-gray-300 drop-shadow-sm" />
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
        <span className="flex flex-wrap justify-between w-[12rem] mt-5 mb-10 mx-auto">
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
            loading={loading}
          />
        </span>
      </div>
    </div>
  );
};

export default Acc3;
