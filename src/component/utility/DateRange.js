import React from "react";
import DateInput from "./Date";
import { useState,useEffect } from "react";
import dateNow from './dateNow'
const DateRange = () => {

  //Date Input function
  const [start, setStart] = useState(dateNow);
  const [end, setEnd] = useState(dateNow);

  useEffect(() => {
 // eslint-disable-next-line
  }, [])
  

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
    <div className="grid grid-col-1 gap-1 h-min p-2 mx-auto rounded-lg shadow-sm border w-[18rem] bg-white">
     <label className="mt-[.4rem] ml-1 text-xs text-gray-500 font-semibold ml-3">
Available Date</label>

      <DateInput date={start} handleChange={handleStart} />
      <DateInput date={end} handleChange={handleEnd} />
    </div>
  );
};

export default DateRange;
