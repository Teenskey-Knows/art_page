import React from 'react'
import "../Review/Reviewcard.css"



function Reviewcard({ReviewUserId,ReviewArtId,ReviewComment,ReviewRating,id,onDelete}) {


  const deleteAReviews =`http://localhost:9292/reviews/delete/${id}`

  function handleDelete(){
    fetch(deleteAReviews,{
      method: "DELETE"
    })
    onDelete(id)
  }







  return (
    <>
    <div className='mappedReviews'>
    <p className='userId'>User ID: {ReviewUserId}</p>
    <br />
    <p className='artId'>Art ID Being Reviewed:{ReviewArtId}</p>
    <br />
    <p className='artRating'>Art Rating: {ReviewRating}</p>
    <br />

    <p style={{color:'white'}}className='comment'>Art Remarks: <br/> <br />{ReviewComment}</p>
    <br />
    <button onClick={handleDelete}>Delete Review</button>
    <button className="editReviewBtn" onClick={handleDelete}>Edit Review</button>
    </div>

    </>
  )
}

export default Reviewcard