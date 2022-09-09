import React, {useState,useEffect} from 'react'
import Reviewcard from './Reviewcard'
import { useState } from 'react'

const review_url = "http://localhost:9292/arts/reviews"

function Review() {

        const [reviews,setReviews] = useState([])
        const myreviewfetcher = ()=>{
          fetch(review_url)
          .then((res)=>res.json())
          .then((reviews)=>setReviews(reviews))
        }

        useEffect(myreviewfetcher,[])
        
        let reviewcard = reviews.map((review)=>(
          <Reviewcard/>
        ))

  return (
    <div>
    
    
    </div>
  )
}

export default Review