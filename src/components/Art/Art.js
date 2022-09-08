import React, {useState,useEffect} from 'react'
import Artcard from '../Artcard/Artcard';
import "../Art/Arte.css"


const url = "http://localhost:9292/arts"

function Art() {


  const [arts,setArts] =useState([])

  const myArtFetcher = () => {
    fetch(url)
    .then((res)=>res.json())
    .then((arts)=> 
    setArts(arts)
   )
  };
  

useEffect(myArtFetcher,[])



let artCard = arts.map((art)=>
(

  <Artcard key={art.id} ArtImage={art.art_image} ArtName={art.art_name} ArtId={art.id} ArtDescription={art.art_description} ArtPrice={art.art_price} />



))

// let mealCards = meals.map((meal) => (<MealCard mealName={meal.strMeal} mealThumbnail={meal.strMealThumb} mealId={meal.idMeal} key={meal.idMeal}/>))
  return (
<>
<div className='entire-background'>
  <div className='art-background'>
<div className='art-card-Art'>
{artCard}
</div>
</div>
</div>

</>

    
  )
}

export default Art