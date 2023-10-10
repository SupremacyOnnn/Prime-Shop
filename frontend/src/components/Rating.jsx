import React from 'react'
import {FaStar,FaStarHalfAlt,FaRegStar} from 'react-icons/fa'
export default function Rating(props) {
  return (
    <div className='rating'>
      <span>{props.rating>=1?<FaStar/>: props.rating>=0.5?<FaStarHalfAlt/>:<FaRegStar/>}</span>
      <span>{props.rating>=2?<FaStar/>: props.rating>=1.5?<FaStarHalfAlt/>:<FaRegStar/>}</span>
      <span>{props.rating>=3?<FaStar/>: props.rating>=2.5?<FaStarHalfAlt/>:<FaRegStar/>}</span>
      <span>{props.rating>=4?<FaStar/>: props.rating>=3.5?<FaStarHalfAlt/>:<FaRegStar/>}</span>
      <span>{props.rating>=5?<FaStar/>: props.rating>=4.5?<FaStarHalfAlt/>:<FaRegStar/>}</span>
      <span className='rating-text'>{props.rating} reviews</span>
    </div>
  )
}
