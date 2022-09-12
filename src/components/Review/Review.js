import React, {useState,useEffect} from 'react'
import Reviewcard from './Reviewcard'
import "../Review/Review.css"
import Reviewform from '../Reviewform/Reviewform'

const review_url = "https://myartpage.herokuapp.com/arts/reviews"

function Review() {

        const [reviews,setReviews] = useState([])
        const myreviewfetcher = ()=>{
          fetch(review_url)
          .then((res)=>res.json())
          .then((reviews)=>setReviews(reviews))
        };

        useEffect(myreviewfetcher,[])

         
        
        let reviewcard = reviews.map((review)=>(
          <Reviewcard key={review.id} id={review.id} ReviewUserId={review.user_id} ReviewArtId={review.art_id} ReviewComment={review.comment} ReviewRating={review.rating} onDelete={deleteReview}/>
        ))

        // Creating a function to update movies when the adding forms is triggered

        function addingReviews(newReviews){
          const updatedReviews = [...reviews,newReviews]
          setReviews(updatedReviews)}

          // function addingPets(newPets){
          //   const updatedPets= [...pets,newPets]
          //   setPets(updatedPets)
          // }


            //Creating a Delete Functionality
            function deleteReview(id){
              const updatedReviews = reviews.filter((review)=>review.id !== id)
              setReviews(updatedReviews)
            }
        

       

  return (
    <div className='backgroundReview'>

    <div className='backgroundReviewCard'>

      <div className='reviewContainer'>
    { reviewcard}
    </div>

    </div>
    <div className='backgroundReviewForm'>
      {/* Where my form lives */}
      <div className='reviewformbackground'> <Reviewform onAddingReviews={addingReviews} /></div>

    </div>

    </div>
  )
}

export default Review