import React from "react";
import "../Artcard/Art.css";

function Artcard({ ArtImage, ArtName, ArtId, ArtDescription, ArtPrice }) {
  return (
    <>
      <div className="art-get-request-encloser">
        <img className="art-image" src={ArtImage} alt="" />
        <h3>Artist Name: {ArtName}</h3>
        <h3>Artist Id:{ArtId}</h3>
        <h3>Art Description:</h3>
        <h2>{ArtDescription}</h2>
        <h3>Art Price: {ArtPrice}</h3>
      </div>
    </>
  );
}

export default Artcard;
