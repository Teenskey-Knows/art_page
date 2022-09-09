import React, {useState} from 'react'
import "../Reviewform/Reviewform.css"

function Reviewform({onAddingReviews}) {

const [formData,setFormData] = useState({
    user_id : " ",
    art_id: " ",
    art_rating: " ",
    art_comment: " "
}
)



  return (
    <>
    <div className='form'>
        <h2>Review Form</h2>
    </div>
    <div className='structureform'>
    <form action="">
        <label htmlFor="User Id">User Id</label>
        <br />
        <input type="number"  id="user_id" value={formData.art_id}/>
        <br />
        <label htmlFor="Art Id">Art Id To Review</label>
        <br />
        <input type="number" id="art_id" value={formData.art_id} />
        <br />
        <label htmlFor="Rate Art">Rate Art</label>
        <br />
        <input type="number" id="art_rating" value={formData.art_rating}/>
        <br />
        <label htmlFor="Comment">Comment</label>
        <br />
        <textarea name="" id="art_comment" value={formData.art_comment} cols="30" rows="10"></textarea>
        <br />
        <button type='submit'>Submit Review</button>

    </form>
    </div>
    </>

  )
}

export default Reviewform