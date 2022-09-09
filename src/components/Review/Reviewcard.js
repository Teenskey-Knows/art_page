import React from 'react'
import "../Review/Reviewcard.css"
function Reviewcard({ReveiwUserId,ReviewArtId,ReviewComment,ReviewRating}) {
  return (
    <>
    <div>
    <h1>User ID: {ReveiwUserId}</h1>
    <p>{ReviewComment}</p>
    <h1>Art ID Being Reviewed:{ReviewArtId}</h1>
    <h1>Art Rating: {ReviewRating}</h1>
    </div>

    </>
  )
}

export default Reviewcard