import React from "react";
import BtnSubmit from "../btn/BtnSubmit";
import Input from "../utility/Input";
import { formHint } from "../utility/Text";

const ResetAcc = () => {
  const span = "grid gap-3"
  return (
    <form className="grid gap-1 ">
    <h4 className="text-cyan-800 text-xs font-bold mx-auto">Reset Accommodator Password</h4>
    <hr className="text-zinc-400 "/>
    
      <span className={span}>
        {formHint("Email")}
        <Input type={"email"} />
      </span>
    
      <span className={span}>
        {formHint("New Password")}
        <Input type={"password"} />
      </span>
    
      <span className={span}>
        {formHint("confirm Password")}
        <Input type={"password"} />
      </span>
    <BtnSubmit />

    </form>
  );
};

export default ResetAcc;
