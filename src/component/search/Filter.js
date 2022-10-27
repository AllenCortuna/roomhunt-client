import React from 'react'
import { ImPriceTag } from 'react-icons/im'
import InputVal from '../utility/InputVal'
import { Label } from './utilty'
const Filter = ({handleChange, query}) => {
  const iconCl = "mr-1 inline";

  return (
    <div className='mt-3 '>
      <Label text={"Price"} icon={<ImPriceTag className={iconCl} />} />
      <InputVal type={"number"} onChange={handleChange} register={null} value={query.price} placeholder={"price"} />

    </div>
  )
}


export default Filter
