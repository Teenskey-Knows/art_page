import React, {useState} from 'react'
import "../Reviewform/Reviewform.css"


const addingUrl = "https://myartpage.herokuapp.com/reviews"



function Reviewform({onAddingReviews,onDelete}) {

const [formData,setFormData] = useState({
    comment: " ",
    rating: " ",
    art_id: " ",
    user_id : " ",
 
   
   
}
)

function handleSubmit(event){
    event.preventDefault();
    fetch(addingUrl,{
        method: "POST",
        headers: {
        "Content-Type":"application/json",
    },
    body: JSON.stringify(
        {    comment: formData.comment,
            rating: formData.rating,
            art_id: formData.art_id,
            user_id: formData.user_id,
        }
    ),

    })
    .then((res)=>res.json())
    .then((newReviews)=>{
        onAddingReviews(newReviews);
        setFormData({
            ...formData,
            comment: " ",
            rating: " ",
            art_id: " ",
            user_id : " ",
         
        });
    });
}


function handleChange(event) {
    const key = event.target.id;
    setFormData({ ...formData, [key]: event.target.value });
  }



  return (
    <>
    <div className='form'>
        <h2>Review Form</h2>
    </div>
    <div className='structureform'>
    <form onSubmit={handleSubmit} action="">
        <label htmlFor="User Id">User Id</label>
        <br />
        <input onChange={handleChange} type="number"  id="user_id" value={formData.user_id}/>
        <br />
        <label htmlFor="Art Id">Art Id To Review</label>
        <br />
        <input onChange={handleChange}    type="number" id="art_id" value={formData.art_id} />
        <br />
        <label htmlFor="Rate Art">Rate Art</label>
        <br />
        <input onChange={handleChange}  type="number" id="rating" value={formData.rating}/>
        <br />
        <label htmlFor="Comment">Comment</label>
        <br />
        <textarea onChange={handleChange} name="" id="comment" value={formData.comment} cols="30" rows="10"></textarea>
        <br />
        <button type='submit'>Submit Review</button>

    </form>
    </div>
    </>

  )
}

export default Reviewform