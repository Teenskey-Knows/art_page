import React, {useState,useEffect} from 'react'
import Reviewcard from './Reviewcard'
import "../Review/Review.css"

const review_url = "http://localhost:9292/arts/reviews"

function Review() {

        const [reviews,setReviews] = useState([])
        const myreviewfetcher = ()=>{
          fetch(review_url)
          .then((res)=>res.json())
          .then((reviews)=>setReviews(reviews))
        };

        useEffect(myreviewfetcher,[])

        
      
        
        let reviewcard = reviews.map((review)=>(
          <Reviewcard key={review.id} ReviewUserId={review.user_id} ReviewArtId={review.art_id} ReviewComment={review.comment} ReviewRating={review.rating} />
        ))

  return (
    <div className='backgroundReview'>
    
    {reviewcard}
   
    </div>
  )
}

export default Review