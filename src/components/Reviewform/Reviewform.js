import React from 'react'
import "../Reviewform/Reviewform.css"

function Reviewform() {
  return (
    <>
    <div className='form'>
        <h2>Review Form</h2>
    </div>
    <div className='structureform'>
    <form action="">
        <label htmlFor="User Id">User Id</label>
        <br />
        <input type="number" />
        <br />
        <label htmlFor="Art Id">Art Id To Review</label>
        <br />
        <input type="number" />
        <br />
        <label htmlFor="Rate Art">Rate Art</label>
        <br />
        <input type="number" />
        <br />
        <label htmlFor="Comment">Comment</label>
        <br />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
        <button type='submit'>Submit Review</button>

    </form>
    </div>
    </>

  )
}

export default Reviewform