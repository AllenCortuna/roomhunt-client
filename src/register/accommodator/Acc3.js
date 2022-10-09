import React from "react";

const Acc3 = () => {
  const [otp, setotp] = React.useState("");
  const handleChange = (e) => {
    setotp(e.target.value);
    console.log(otp);
  };

  return (
    <>
    </>
  );
};

export default Acc3;

