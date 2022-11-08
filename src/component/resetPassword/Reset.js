import React from 'react'
import { useLocation } from 'react-router-dom'
import ResetAcc from './ResetAcc'
import ResetClient from './ResetClient'
import reset from '../img/acc.svg'

const Reset = () => {
 const path =  useLocation()

  return (
    <div className='mt-14 md:mt-40 p-4 mx-auto grid'>

    <span className="bg-white p-5 md:p-6 border shadow-md rounded-lg max-w-[24rem] mx-auto">
    <img src={reset} alt="reset" className="drop-shadow-md w-[50%] my-5 mx-auto" />
      
    {(path.pathname ==="/reset/acc") ? <ResetAcc/> : <ResetClient/>
   } 
    </span>  
    </div>
  )
}

export default Reset
