import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs'
import React from 'react'

const Review = ({ review }) => {
  const star = "-mt-1 my-auto text-sm drop-shadow-sm inline text-yellow"
  const starClear = "-mt-1 my-auto text-sm drop-shadow-sm inline text-zinc-400"
  
  return (
    <span className='grid gap-1 p-1 py-0 grid-cols-5 w-auto rounded-md bg-zinc-100 shadow-sm '>
    
      <span>
        {review >= 1 ? <BsStarFill className={star} /> : (
          review >= 0.5 ? <BsStarHalf className={star} /> :
            <BsStar className={star} />)
        }
      </span>
    
      <span>
        {review >= 2 ? <BsStarFill className={star} /> : (
          review >= 1.5 ? <BsStarHalf className={star} /> :
            <BsStar className={starClear} />)
        }
      </span>
    
      <span>
        {review >= 3 ? <BsStarFill className={star} /> : (
          review >= 2.5 ? <BsStarHalf className={star} /> :
            <BsStar className={starClear} />)
        }
      </span>
    
      <span>
        {review >= 4 ? <BsStarFill className={star} /> : (
          review >= 3.5 ? <BsStarHalf className={star} /> :
            <BsStar className={starClear} />)
        }
      </span>
    
      <span>
        {review >= 5 ? <BsStarFill className={star} /> : (
          review >= 4.5 ? <BsStarHalf className={star} /> :
            <BsStar className={starClear} />)
        }
      </span>


    </span>
  )
}

export default Review
