import React from 'react'
import Input from "../utility/Input";
import Date from "../utility/Date";

const ClientPage1 = () => {
  return (

    <span className="flex flex-wrap flex-rows gap-[.3rem] mt-10">
      <Input
        name={"name"}
        type={"text"}
        placeholder={"name: eg John Doe"}
        // onChange={}
      />
      <Input
        name={"email"}
        type={"email"}
        placeholder={"email"}
        // onChange={}
      />
      <Input
        name={"contact"}
        type={"number"}
        placeholder={"contact number"}
        // onChange={}
      />
      {/* birthday */}
      <span className="min-w-[18rem] max-w-[23rem] flex justify-start mx-auto align-center">
        <p className="text-xs text-gray-400 inline font-[500] ml-1 mr-3 mt-1">
          Birthday:
        </p>
        <Date />
      </span>
    </span>
  )
}

export default ClientPage1  
