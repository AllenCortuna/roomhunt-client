import React from 'react'
import { ImPriceTag } from 'react-icons/im'
import {  IoIosBed} from 'react-icons/io'
import { MdLocationOn } from "react-icons/md";
import InputVal from '../utility/InputVal'
import Option from '../utility/Option'
import { Label } from './utilty'
const Filter = ({handleChange, query}) => {
  const iconCl = "mr-1 inline";
  const handleOpt = () => {
    return null
  }

  return (
    <div className='mt-3 grid grid-cols-2 gap-5 gap-y-3 p-3 '>
    <span>
      <Label text={"min-Price"} icon={<ImPriceTag className={iconCl} />} />
      <InputVal type={"number"} onChange={handleChange} register={null} value={query.minPrice} placeholder={"min price"} />
    </span>
    
    <span>
      <Label text={"max-Price"} icon={<ImPriceTag className={iconCl} />} />
      <InputVal type={"number"} onChange={handleChange} register={null} value={query.maxPrice} placeholder={"max price"} />
    </span>
    
    <span>
      <Label text={"Bed"} icon={<IoIosBed className={iconCl} />} />
    <br/>  
    <Option option={[1,2,3,4,5]} value={query.bed} handleOpt={handleOpt}/>
    </span>

    <span>
      <Label text={"Location"} icon={<MdLocationOn className={iconCl} />} />
      <InputVal type={"text"} onChange={handleChange} register={null} value={query.maxPrice} placeholder={"city or province"} />
    </span>
    

    </div>
  )
}


export default Filter
