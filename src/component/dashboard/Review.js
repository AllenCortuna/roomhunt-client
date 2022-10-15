import React from "react";
import Rating from 'react-star-review'



const Review = ({ star }) => {
  // const star = 4

  return <div className="">
    <Rating
      rating={star}
    // icon={}
    // interactive
    // onRatingChanged={(r) => console.log(r)}
    // hoverColor="#00f"
    // filledColor="#f00"
    // clearColor="#0f0"
    // borderColor="#000" 
    />

  </div>

};

export default Review;
