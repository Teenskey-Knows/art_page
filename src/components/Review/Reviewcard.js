import React from 'react'
import "../Review/Reviewcard.css"
function Reviewcard({ReveiwUserId,ReviewArtId,ReviewComment,ReviewRating}) {
  return (
    <>
    <div className='mappedReviews'>
    <p className='userId'>User ID: {ReveiwUserId}</p>
    <br />
    <p className='comment'>{ReviewComment}</p>
    <br />
    <p className='artId'>Art ID Being Reviewed:{ReviewArtId}</p>
    <br />
    <p className='artRating'>Art Rating: {ReviewRating}</p>
    <br />
    </div>

    </>
  )
}

export default Reviewcard