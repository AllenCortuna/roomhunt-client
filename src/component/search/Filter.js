import React from 'react'
import { ImPriceTag } from 'react-icons/im'
import {  IoIosBed} from 'react-icons/io'
import {BsCalendar2CheckFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import InputVal from '../utility/InputVal'
import DateInput from '../utility/Date'
import Option from '../utility/Option'
import { Label } from './utilty'
const Filter = ({handleChange, query,setquery}) => {
  const iconCl = "mr-1 inline";
  
  const handleOpt = () => {
    return null
  }
  
  const handleCheckIn = (e) => {
    setquery({ ...query, checkInDate: e.target.value });
  };

  const handleCheckOut = (e) => {
    setquery({ ...query, checkOutDate: e.target.value });
  };


  return (
    <div className='mt-3 grid grid-cols-2 gap-5 p-3 '>
    

    <span>
      <Label text={"Location"} icon={<MdLocationOn className={iconCl} />} />
      <InputVal type={"text"} onChange={handleChange} register={null} value={query.maxPrice} placeholder={"city or province"} />
    </span>
    
    <span>
      <Label text={"Bed"} icon={<IoIosBed className={iconCl} />} />
    <br/>  
    <Option option={[1,2,3,4,5]} value={query.bed} handleOpt={handleOpt}/>
    </span>
    
    
    <span>
      <Label text={"min-Price"} icon={<ImPriceTag className={iconCl} />} />
      <InputVal type={"number"} onChange={handleChange} register={null} value={query.minPrice} placeholder={"min price"} />
    </span>
    
    <span>
      <Label text={"max-Price"} icon={<ImPriceTag className={iconCl} />} />
      <InputVal type={"number"} onChange={handleChange} register={null} value={query.maxPrice} placeholder={"max price"} />
    </span>
    
    <span>
      <Label text={"Check-In"} icon={<BsCalendar2CheckFill className={iconCl} />} />
    <DateInput date={query.checkInDate} handleChange={handleCheckIn} />
    </span>
    
    <span>
      <Label text={"Check-Out"} icon={<BsCalendar2CheckFill className={iconCl} />} />
    <DateInput date={query.checkOutDate} handleChange={handleCheckOut} />
    </span>
    
    
    </div>
  )
}


export default Filter
