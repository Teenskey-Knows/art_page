import React from 'react'
import "../Review/Reviewcard.css"
function Reviewcard({ReviewUserId,ReviewArtId,ReviewComment,ReviewRating}) {
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
    </div>

    </>
  )
}

export default Reviewcard