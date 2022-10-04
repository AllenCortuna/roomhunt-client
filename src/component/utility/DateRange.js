import React from "react";
import DateInput from "./Date";
import { useState, useEffect } from "react";
import dateNow from "./dateNow";
const DateRange = () => {
  //Date Input function
  const [start, setStart] = useState(dateNow);
  const [end, setEnd] = useState(dateNow);

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const handleStart = (e) => {
    setStart(e.target.value);
  };
  const handleEnd = (e) => {
    setEnd(e.target.value);
  };

  // const handlSet = () => {
  //
  //   function inRange(list) { return (list.date >= start && list.date <= end) }
  //   const rangeSelected = lists.filter(list => inRange(list))
  //   console.log(rangeSelected) //WARN:
  //   setListByFilter(rangeSelected)
  // };

  return (
    <div className="grid grid-col-2 gap-1 h-min p-2 rounded-lg shadow-sm border w-auto bg-white border-gray-100">
      <label className="mt-[.4rem] text-xs text-gray-500 font-semibold">
        Available Date
      </label>
      <span>
        <label className="text-gray-500 text-xs font-[500]">From: </label>
        <DateInput date={start} handleChange={handleStart} />
      </span>
      <span>
        <label className="text-gray-500 text-xs font-[500] mr-4">To: </label>
        <DateInput date={end} handleChange={handleEnd} />
      </span>
    </div>
  );
};

export default DateRange;
